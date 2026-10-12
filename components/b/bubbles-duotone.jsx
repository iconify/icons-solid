import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmzmcdb2d.css';
import '../../css/n/nr_-csbne.css';
import '../../css/i/il59yor0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gmzmcdb2d"/><path class="nr_-csbne"/><path class="il59yor0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bubbles-duotone"} {...others} />);
}

export default Component;
