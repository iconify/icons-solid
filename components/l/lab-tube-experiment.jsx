import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i1hcqhrwg.css';
import '../../css/u/u5ce_8btl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i1hcqhrwg"/><path class="u5ce_8btl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:lab-tube-experiment"} {...others} />);
}

export default Component;
