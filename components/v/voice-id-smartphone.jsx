import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8gg70jax.css';
import '../../css/i/ihap6s9si.css';
import '../../css/l/l0t3xkb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8gg70jax"/><path class="ihap6s9si"/><path clip-rule="evenodd" class="l0t3xkb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:voice-id-smartphone"} {...others} />);
}

export default Component;
