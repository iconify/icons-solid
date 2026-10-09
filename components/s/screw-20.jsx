import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdfpjmbun.css';
import '../../css/t/t8mju9b8g.css';
import '../../css/f/f7uhapy5r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mdfpjmbun"/><path class="t8mju9b8g"/><path class="f7uhapy5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screw-20"} {...others} />);
}

export default Component;
