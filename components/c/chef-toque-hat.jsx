import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lkubkpbkx.css';
import '../../css/i/i3-g6dbwt.css';
import '../../css/m/ml4dqq0hl.css';
import '../../css/x/x_g31y3xd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="lkubkpbkx"/><path class="i3-g6dbwt"/><path class="ml4dqq0hl"/><path class="x_g31y3xd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:chef-toque-hat"} {...others} />);
}

export default Component;
