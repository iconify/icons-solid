import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6s54bcir.css';
import '../../css/f/fzunxilou.css';
import '../../css/v/v-hvuw-wl.css';
import '../../css/n/n0680roia.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v6s54bcir"/><circle class="fzunxilou"/><path class="v-hvuw-wl"/><path class="n0680roia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodyx-light"} {...others} />);
}

export default Component;
