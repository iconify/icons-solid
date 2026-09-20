import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwqiuqb6d.css';
import '../../css/u/ujfbrab8s.css';
import '../../css/i/inw6q5r9y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zwqiuqb6d"/><path clip-rule="evenodd" class="ujfbrab8s"/><path class="inw6q5r9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dashboard-gauge-2-flat"} {...others} />);
}

export default Component;
