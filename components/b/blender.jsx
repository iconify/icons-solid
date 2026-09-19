import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnv6cykfw.css';
import '../../css/j/jjf3s4bir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mnv6cykfw"/><path class="jjf3s4bir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:blender"} {...others} />);
}

export default Component;
