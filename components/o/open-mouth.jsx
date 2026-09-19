import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gshe_di8n.css';
import '../../css/d/dahaxobbu.css';
import '../../css/v/vr1aztb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gshe_di8n"/><path class="dahaxobbu"/><path class="vr1aztb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:open-mouth"} {...others} />);
}

export default Component;
