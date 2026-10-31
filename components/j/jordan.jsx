import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1x_6zbkv.css';
import '../../css/y/y55zcjfsz.css';
import '../../css/y/yrwoiybrn.css';
import '../../css/f/fa--9cbnd.css';
import '../../css/p/pf622-vpv.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="d1x_6zbkv"/><path class="y55zcjfsz"/><path class="yrwoiybrn"/><path class="fa--9cbnd"/><path class="pf622-vpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:jordan"} {...others} />);
}

export default Component;
