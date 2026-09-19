import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp24w_8tf.css';
import '../../css/f/f8cpqdg_j.css';
import '../../css/u/ux2lhde9c.css';
import '../../css/t/t-b_8j6mv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="sp24w_8tf"><path class="f8cpqdg_j"/><path class="ux2lhde9c"/><path class="t-b_8j6mv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:natural-mode"} {...others} />);
}

export default Component;
