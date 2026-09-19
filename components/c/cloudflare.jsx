import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwpk_5b-d.css';
import '../../css/g/guwa6_8ak.css';
import '../../css/v/v_sn19bay.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zwpk_5b-d"/><path class="guwa6_8ak"/><path class="v_sn19bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cloudflare"} {...others} />);
}

export default Component;
