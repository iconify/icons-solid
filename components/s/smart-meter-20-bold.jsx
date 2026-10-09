import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4w28heyk.css';
import '../../css/n/nmtbxqbkt.css';
import '../../css/r/rz5zv0blr.css';
import '../../css/h/hbfxshwmv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e4w28heyk"/><path class="nmtbxqbkt"/><path class="rz5zv0blr"/><path class="hbfxshwmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-meter-20-bold"} {...others} />);
}

export default Component;
