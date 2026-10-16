import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z89_jubnv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z89_jubnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waveform-20-bold"} {...others} />);
}

export default Component;
