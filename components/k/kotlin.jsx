import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd25emlxv.css';
import '../../css/z/zesgwkbls.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bd25emlxv"/><path class="zesgwkbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kotlin"} {...others} />);
}

export default Component;
