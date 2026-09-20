import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k_5zdoero.css';
import '../../css/u/upy2oubey.css';
import '../../css/y/y9iyilb9a.css';
import '../../css/s/swsab_86e.css';
import '../../css/o/onvdunbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k_5zdoero"/><path class="upy2oubey"/><path class="y9iyilb9a"/><circle class="swsab_86e"/><path class="onvdunbbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-path-connect-broken"} {...others} />);
}

export default Component;
