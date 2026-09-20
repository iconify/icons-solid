import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9fh2erkx.css';
import '../../css/n/nd7aurbbb.css';
import '../../css/j/jl-5_5u-u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="t9fh2erkx"/><path clip-rule="evenodd" class="nd7aurbbb"/><path class="jl-5_5u-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:target-3-flat"} {...others} />);
}

export default Component;
