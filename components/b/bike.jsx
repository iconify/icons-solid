import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kfxi16bfw.css';
import '../../css/z/z0rxp-0ta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kfxi16bfw"/><circle class="z0rxp-0ta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bike"} {...others} />);
}

export default Component;
