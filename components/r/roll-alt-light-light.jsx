import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yb6t3nbpr.css';
import '../../css/e/ea4bkccoi.css';
import '../../css/k/k35zgbb0z.css';
import '../../css/a/a1rfq419s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="yb6t3nbpr"/><path class="ea4bkccoi"/><circle class="k35zgbb0z"/><path class="a1rfq419s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:roll-alt-light-light"} {...others} />);
}

export default Component;
