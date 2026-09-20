import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eie5jacms.css';
import '../../css/i/iulrv-ufv.css';
import '../../css/c/copyle26i.css';
import '../../css/i/if82eubsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="eie5jacms"/><path class="iulrv-ufv"/><path class="copyle26i"/><path class="if82eubsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:shopping-cart-user-4"} {...others} />);
}

export default Component;
