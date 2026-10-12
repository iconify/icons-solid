import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym2y-0zlv.css';
import '../../css/c/cbbn8ybds.css';
import '../../css/p/pn-9x0dbt.css';
import '../../css/p/pll8__bet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ym2y-0zlv"/><path class="cbbn8ybds"/><path class="pn-9x0dbt"/><path class="pll8__bet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pizza-duotone"} {...others} />);
}

export default Component;
