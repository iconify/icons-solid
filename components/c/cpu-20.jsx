import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af6ze-elo.css';
import '../../css/v/vgqa32bip.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="af6ze-elo"/><path class="vgqa32bip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cpu-20"} {...others} />);
}

export default Component;
