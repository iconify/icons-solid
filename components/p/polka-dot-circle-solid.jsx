import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_oen7vak.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="u_oen7vak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:polka-dot-circle-solid"} {...others} />);
}

export default Component;
