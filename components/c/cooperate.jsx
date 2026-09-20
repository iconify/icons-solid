import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0be3bgwo.css';
import '../../css/p/p9tesnssu.css';
import '../../css/e/ep8ejkici.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p0be3bgwo"/><path class="p9tesnssu"/><path class="ep8ejkici"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cooperate"} {...others} />);
}

export default Component;
