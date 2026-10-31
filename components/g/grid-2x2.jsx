import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5ke_q-oc.css';
import '../../css/u/ufhyd-bxp.css';
import '../../css/e/erc72acrq.css';
import '../../css/b/be3qrwu9i.css';
import '../../css/e/eczqvsbgp.css';
import '../../css/q/q3vdnhbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a5ke_q-oc wm-shadow"/><path class="ufhyd-bxp wm-shadow"/><path class="erc72acrq"/><path class="be3qrwu9i"/><path class="eczqvsbgp"/><path class="q3vdnhbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:grid-2x2"} {...others} />);
}

export default Component;
