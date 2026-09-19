import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/noo3asbky.css';
import '../../css/c/c9y0u6eai.css';
import '../../css/l/lz_1ujuza.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="noo3asbky"/><path class="c9y0u6eai"/><path class="lz_1ujuza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clapperboard"} {...others} />);
}

export default Component;
