import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsvcw96ah.css';
import '../../css/y/yal5mhbcs.css';
import '../../css/k/kbk3tibjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fsvcw96ah"/><path class="yal5mhbcs"/><path class="kbk3tibjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:layers-down-left-filled"} {...others} />);
}

export default Component;
