import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a-m8b9bhz.css';
import '../../css/z/z77ryvbfa.css';
import '../../css/q/qvra2koks.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="a-m8b9bhz"/><path class="wm-shine z77ryvbfa"/><path class="qvra2koks wm-k"/><path class="qr4ochb5c wm-s"/><path class="wm-deco xc_je6bwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:heart-off"} {...others} />);
}

export default Component;
