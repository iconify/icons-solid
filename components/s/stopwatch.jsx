import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrrw0tgug.css';
import '../../css/k/kh_vbgbyi.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="rrrw0tgug"/><path class="kh_vbgbyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:stopwatch"} {...others} />);
}

export default Component;
