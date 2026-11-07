import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rykq8yo8d.css';
import '../../css/u/u-vlijawj.css';
import '../../css/a/at9l3acdr.css';
import '../../css/s/s78ywflqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rykq8yo8d"/><path class="u-vlijawj"/><path class="at9l3acdr"/><path class="s78ywflqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-bold-duotone"} {...others} />);
}

export default Component;
