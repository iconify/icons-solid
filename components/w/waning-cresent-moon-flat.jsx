import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s14l_k1mj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="s14l_k1mj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:waning-cresent-moon-flat"} {...others} />);
}

export default Component;
