import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/u/umjxd7bux.css';
import '../../css/w/wmzzd2prd.css';
import '../../css/p/p3vlh0i5k.css';
import '../../css/z/z_j864liq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="umjxd7bux"/><path class="wmzzd2prd"/><circle class="p3vlh0i5k"/><path class="z_j864liq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pen"} {...others} />);
}

export default Component;
