import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppj2e6b_r.css';
import '../../css/p/p5xgy2blo.css';
import '../../css/b/b7vjddz7e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ppj2e6b_r"/><path class="p5xgy2blo"/><path class="b7vjddz7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-plant-20"} {...others} />);
}

export default Component;
