import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h86oi0pod.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h86oi0pod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:platformdotsh"} {...others} />);
}

export default Component;
