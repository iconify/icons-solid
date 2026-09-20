import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/i_ofu-b1b.css';
import '../../css/p/pt40p0bcy.css';
import '../../css/o/o-ro0rb9o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="i_ofu-b1b"/><path class="pt40p0bcy"/><path class="o-ro0rb9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:add-layer-2"} {...others} />);
}

export default Component;
