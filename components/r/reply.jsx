import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n1-owihhh.css';
import '../../css/y/ye1i72bgd.css';
import '../../css/t/tct-zyseb.css';
import '../../css/i/iyot9wbav.css';
import '../../css/h/h_4g86b_w.css';
import '../../css/p/p0yhhpb9t.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="n1-owihhh wm-shadow"/><path class="ye1i72bgd"/><path class="tct-zyseb"/><path class="iyot9wbav"/><path class="h_4g86b_w wm-shine"/><path class="p0yhhpb9t wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:reply"} {...others} />);
}

export default Component;
