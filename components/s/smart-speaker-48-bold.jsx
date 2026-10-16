import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmd-k42xk.css';
import '../../css/g/gbbj8_bmz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wmd-k42xk"/><path class="gbbj8_bmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-speaker-48-bold"} {...others} />);
}

export default Component;
