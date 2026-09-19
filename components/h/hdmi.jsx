import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuv7dvbxa.css';
import '../../css/f/fvzirrn2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zuv7dvbxa"/><path class="fvzirrn2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:hdmi"} {...others} />);
}

export default Component;
