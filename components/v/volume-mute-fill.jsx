import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0nfnpd3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0nfnpd3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:volume-mute-fill"} {...others} />);
}

export default Component;
