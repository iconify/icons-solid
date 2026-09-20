import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9vm1jp9x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u9vm1jp9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:review-board-dark"} {...others} />);
}

export default Component;
