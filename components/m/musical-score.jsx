import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhla2-b5p.css';
import '../../css/r/r2gwrbc_m.css';
import '../../css/o/olx8frbln.css';
import '../../css/p/p-0gvwbqy.css';
import '../../css/d/dr--31bsb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hhla2-b5p"/><path class="r2gwrbc_m"/><path class="olx8frbln"/><path class="p-0gvwbqy"/><path class="dr--31bsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:musical-score"} {...others} />);
}

export default Component;
