import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3a_eqbui.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="i3a_eqbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:airplane-enabled"} {...others} />);
}

export default Component;
