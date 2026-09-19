import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itc5zdbai.css';
import '../../css/o/o6w0dd8_g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="itc5zdbai"/><path class="o6w0dd8_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-circle-filled"} {...others} />);
}

export default Component;
