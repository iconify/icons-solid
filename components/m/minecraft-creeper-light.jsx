import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-s51kssr.css';
import '../../css/j/j74io277e.css';
import '../../css/s/sdjrrqbwl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o-s51kssr"/><path class="j74io277e"/><path class="sdjrrqbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minecraft-creeper-light"} {...others} />);
}

export default Component;
