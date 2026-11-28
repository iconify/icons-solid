import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk4tjmvcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rk4tjmvcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:sparkles"} {...others} />);
}

export default Component;
