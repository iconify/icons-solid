import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyyydmbfg.css';
import '../../css/l/lk--g1e_g.css';
import '../../css/n/noishdbbf.css';
import '../../css/c/cu3zp1biq.css';
import '../../css/a/av9l-sbfw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tyyydmbfg"/><path class="lk--g1e_g"/><path class="noishdbbf"/><path class="cu3zp1biq"/><path class="av9l-sbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:thumbnail-preview"} {...others} />);
}

export default Component;
