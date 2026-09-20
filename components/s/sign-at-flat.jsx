import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rve-l_nnn.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="rve-l_nnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:sign-at-flat"} {...others} />);
}

export default Component;
