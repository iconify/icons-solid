import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnws3owxo.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="jnws3owxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:react-wheel-picker-light"} {...others} />);
}

export default Component;
