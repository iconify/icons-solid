import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hsibv_iva.css';
import '../../css/d/dzsri3-lf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="hsibv_iva"/><circle class="dzsri3-lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:exclamation"} {...others} />);
}

export default Component;
