import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aph_dqbwx.css';
import '../../css/r/rulnoebmk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aph_dqbwx"/><path class="rulnoebmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-mail-bridge-light"} {...others} />);
}

export default Component;
