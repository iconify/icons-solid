import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byvrfmb7t.css';
import '../../css/r/rw1w1gbsc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="byvrfmb7t"/><path class="rw1w1gbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:brick"} {...others} />);
}

export default Component;
