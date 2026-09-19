import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9ul_lbcj.css';
import '../../css/r/r32kt6-tp.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="f9ul_lbcj"/><path class="r32kt6-tp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:archive"} {...others} />);
}

export default Component;
