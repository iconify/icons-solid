import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lld64mb1j.css';
import '../../css/i/it1d66trk.css';
import '../../css/k/k57p5ac6j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lld64mb1j"/><path class="it1d66trk"/><path class="k57p5ac6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-lock-48"} {...others} />);
}

export default Component;
