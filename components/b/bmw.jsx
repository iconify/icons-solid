import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rafsg0atz.css';
import '../../css/w/wn36-3bgk.css';
import '../../css/k/k7_ztobeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rafsg0atz"/><path class="wn36-3bgk"/><path class="k7_ztobeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bmw"} {...others} />);
}

export default Component;
