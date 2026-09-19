import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/dev22nymo.css';
import '../../css/z/zalparb3k.css';
import '../../css/w/w3btmibmd.css';
import '../../css/m/mme80_0xf.css';
import '../../css/k/k772_dyhv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="dev22nymo"/><path class="zalparb3k"/><path class="w3btmibmd"/><path class="mme80_0xf"/><path class="k772_dyhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cup-four"} {...others} />);
}

export default Component;
