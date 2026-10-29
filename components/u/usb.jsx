import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u2bn4gbtc.css';
import '../../css/b/bawif2wet.css';
import '../../css/c/cm70inbtc.css';
import '../../css/g/gif5xqbjs.css';
import '../../css/f/fqskzzehi.css';
import '../../css/c/c7k3mlg9m.css';
import '../../css/w/wzoluhwes.css';
import '../../css/u/uomh9ebpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="u2bn4gbtc wm-shadow"/><path class="bawif2wet"/><path class="cm70inbtc"/><path class="gif5xqbjs"/><path class="fqskzzehi"/><path class="c7k3mlg9m"/><path class="wzoluhwes"/><path class="uomh9ebpq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:usb"} {...others} />);
}

export default Component;
