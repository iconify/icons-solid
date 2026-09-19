import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4e68dbqk.css';
import '../../css/j/jg2tutyri.css';
import '../../css/z/zhoc05gug.css';
import '../../css/w/w4fvqfsxd.css';
import '../../css/n/nvhfutj6s.css';
import '../../css/o/oocuqpj6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n4e68dbqk"/><circle class="jg2tutyri"/><path class="zhoc05gug"/><path class="w4fvqfsxd"/><circle class="nvhfutj6s"/><path class="oocuqpj6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:music-2-duotone"} {...others} />);
}

export default Component;
