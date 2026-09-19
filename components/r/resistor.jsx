import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/x9hfyabqz.css';
import '../../css/w/w_cf54ukm.css';
import '../../css/s/sk22xsb1b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="x9hfyabqz"/><path class="w_cf54ukm"/><path class="sk22xsb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:resistor"} {...others} />);
}

export default Component;
