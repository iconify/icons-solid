import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f254y7lap.css';
import '../../css/s/sa2dgcb0d.css';
import '../../css/l/l33p-5tkx.css';
import '../../css/o/o9gw0lb4x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="f254y7lap"/><path class="sa2dgcb0d"/><path clip-rule="evenodd" class="l33p-5tkx"/><path clip-rule="evenodd" class="o9gw0lb4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-single-neutral-male-flat"} {...others} />);
}

export default Component;
