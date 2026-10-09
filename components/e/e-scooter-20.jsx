import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfezx0bem.css';
import '../../css/a/a1563zsfw.css';
import '../../css/s/s00ny_50k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hfezx0bem"/><path class="a1563zsfw"/><path class="s00ny_50k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-scooter-20"} {...others} />);
}

export default Component;
