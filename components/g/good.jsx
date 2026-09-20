import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncjysacrn.css';
import '../../css/h/hv--zic2y.css';
import '../../css/e/evb5kpc_i.css';
import '../../css/z/zdagr0b5r.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="ncjysacrn"/><path class="hv--zic2y"/><circle class="evb5kpc_i"/><circle class="zdagr0b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:good"} {...others} />);
}

export default Component;
