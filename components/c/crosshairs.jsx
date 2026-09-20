import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q44wy-m0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q44wy-m0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:crosshairs"} {...others} />);
}

export default Component;
