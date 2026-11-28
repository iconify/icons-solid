import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8d3t5s1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h8d3t5s1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:globe-off"} {...others} />);
}

export default Component;
