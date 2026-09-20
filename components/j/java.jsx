import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9gg9kwla.css';
import '../../css/g/g8r11xbyl.css';
import '../../css/m/mev1hea9q.css';
import '../../css/q/q3g_if6kz.css';
import '../../css/n/ns5cfdloq.css';

const viewBox = {"width":256,"height":346};
const content = `<path class="f9gg9kwla"/><path class="g8r11xbyl"/><path class="mev1hea9q"/><path class="q3g_if6kz"/><path class="ns5cfdloq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:java"} {...others} />);
}

export default Component;
