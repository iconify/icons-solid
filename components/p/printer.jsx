import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1gs-6bun.css';
import '../../css/l/laly92dep.css';
import '../../css/o/ojebk8beo.css';
import '../../css/g/gowh172ju.css';
import '../../css/o/o5wlcpbou.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f1gs-6bun"/><path class="laly92dep"/><path clip-rule="evenodd" class="ojebk8beo"/><path class="gowh172ju"/><path class="o5wlcpbou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:printer"} {...others} />);
}

export default Component;
