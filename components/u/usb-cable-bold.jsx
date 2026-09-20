import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4c0kcz5z.css';
import '../../css/g/gjwv7pfic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q4c0kcz5z"/><path class="gjwv7pfic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:usb-cable-bold"} {...others} />);
}

export default Component;
