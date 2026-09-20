import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtk-ex65l.css';
import '../../css/j/jev1vmvpc.css';
import '../../css/j/jowrf1ruc.css';
import '../../css/e/eg-1trbgn.css';
import '../../css/z/zl2ve2jya.css';
import '../../css/q/qnsqbrx1g.css';
import '../../css/u/u3h8osb0e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jtk-ex65l"/><path class="jev1vmvpc"/><path class="jowrf1ruc"/><path class="eg-1trbgn"/><path class="zl2ve2jya"/><path class="qnsqbrx1g"/><path class="u3h8osb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:clipboard-2"} {...others} />);
}

export default Component;
