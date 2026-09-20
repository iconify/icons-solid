import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d__nz5trr.css';
import '../../css/r/r8amcz75y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d__nz5trr"/><path class="r8amcz75y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-barcode"} {...others} />);
}

export default Component;
