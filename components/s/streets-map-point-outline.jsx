import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-ejzngjy.css';
import '../../css/r/rc0x7kb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q-ejzngjy"/><path class="rc0x7kb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-map-point-outline"} {...others} />);
}

export default Component;
