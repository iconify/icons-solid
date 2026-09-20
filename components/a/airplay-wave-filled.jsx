import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyvvzzbvp.css';
import '../../css/m/mqf73h98a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hyvvzzbvp"/><path class="mqf73h98a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:airplay-wave-filled"} {...others} />);
}

export default Component;
