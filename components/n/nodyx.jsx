import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec7pwm9zi.css';
import '../../css/f/fzunxilou.css';
import '../../css/v/v-hvuw-wl.css';
import '../../css/n/n0680roia.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ec7pwm9zi"/><circle class="fzunxilou"/><path class="v-hvuw-wl"/><path class="n0680roia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodyx"} {...others} />);
}

export default Component;
