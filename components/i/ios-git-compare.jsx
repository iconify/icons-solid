import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ansskgocr.css';
import '../../css/f/f_g898bnj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ansskgocr"/><path class="f_g898bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-git-compare"} {...others} />);
}

export default Component;
