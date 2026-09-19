import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl-rncb1j.css';
import '../../css/r/r48hjqxil.css';
import '../../css/x/x-qx_cb4k.css';
import '../../css/b/b-spi4k_z.css';
import '../../css/u/uwmzjub3v.css';
import '../../css/i/iu79egzil.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pl-rncb1j"/><path class="r48hjqxil"/><path class="x-qx_cb4k"/><path class="b-spi4k_z"/><path class="uwmzjub3v"/><path class="iu79egzil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:homebrew-wordmark"} {...others} />);
}

export default Component;
