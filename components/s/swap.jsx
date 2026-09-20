import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myetzitsr.css';
import '../../css/f/f46ywubav.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="myetzitsr"/><path class="f46ywubav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:swap"} {...others} />);
}

export default Component;
