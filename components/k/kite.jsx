import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ymj2xsb9c.css';
import '../../css/u/u6jzgu2rh.css';
import '../../css/p/ph0zygbzv.css';
import '../../css/z/zq3xo992x.css';
import '../../css/d/dsyw6xbau.css';
import '../../css/i/i7tx84i0j.css';
import '../../css/l/l-sm59bzp.css';
import '../../css/h/hx71cnbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow ymj2xsb9c"/><path class="u6jzgu2rh"/><path class="ph0zygbzv"/><path class="zq3xo992x"/><path class="dsyw6xbau wm-shine"/><path class="i7tx84i0j wm-s"/><path class="l-sm59bzp wm-s"/><path class="hx71cnbdn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:kite"} {...others} />);
}

export default Component;
