import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2n_mllgr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="z2n_mllgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-humidity-none-humidity-drop-weather"} {...others} />);
}

export default Component;
