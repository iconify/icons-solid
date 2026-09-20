import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eio-gbbes.css';
import '../../css/m/mdcqdvwvs.css';
import '../../css/l/lu32vyb3z.css';
import '../../css/e/egyx_dwjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eio-gbbes"/><path class="mdcqdvwvs"/><path class="lu32vyb3z"/><path class="egyx_dwjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:film"} {...others} />);
}

export default Component;
