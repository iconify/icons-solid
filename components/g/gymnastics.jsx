import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btx30rb9t.css';
import '../../css/i/ii8shdbmi.css';
import '../../css/r/rcg5y_bhj.css';
import '../../css/r/rddpr1bgn.css';
import '../../css/a/atk5wmbtu.css';
import '../../css/p/pa46_ab9h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="btx30rb9t"><path class="ii8shdbmi"/><path class="rcg5y_bhj"/><path class="rddpr1bgn"/><path class="atk5wmbtu"/><path class="pa46_ab9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gymnastics"} {...others} />);
}

export default Component;
