import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwwm0ab1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwwm0ab1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:notebooklm"} {...others} />);
}

export default Component;
