import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/y0u5h-ixe.css';
import '../../css/i/i5a97tmxf.css';
import '../../css/v/vfn1hrbsx.css';
import '../../css/m/m551lgy7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="y0u5h-ixe"/><path class="i5a97tmxf"/><path class="vfn1hrbsx"/><path class="m551lgy7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:refresh-cw"} {...others} />);
}

export default Component;
