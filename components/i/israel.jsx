import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/v/vqgbtpbrj.css';
import '../../css/m/mwxbcf9yt.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="vqgbtpbrj"/><path class="mwxbcf9yt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:israel"} {...others} />);
}

export default Component;
