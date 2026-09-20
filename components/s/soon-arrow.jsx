import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddq_2tbpa.css';
import '../../css/u/u9_0cx3wu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ddq_2tbpa"/><path class="u9_0cx3wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:soon-arrow"} {...others} />);
}

export default Component;
