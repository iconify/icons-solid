import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpm3jpbta.css';
import '../../css/a/a4agvic7a.css';

const viewBox = {"width":171.3,"height":60};
const content = `<path class="vpm3jpbta"/><path class="a4agvic7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:gong"} {...others} />);
}

export default Component;
