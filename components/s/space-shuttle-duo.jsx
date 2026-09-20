import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cew6qzb9g.css';
import '../../css/i/i0ah38bye.css';
import '../../css/y/y-j3yzb1r.css';
import '../../css/a/av4sngcth.css';
import '../../css/q/qk9ki9hbj.css';
import '../../css/j/jno9zc74p.css';
import '../../css/s/sq-ojlbiq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cew6qzb9g"/><path class="i0ah38bye"/><path class="y-j3yzb1r"/><path clip-rule="evenodd" class="av4sngcth"/><path class="qk9ki9hbj"/><path class="jno9zc74p"/><path class="sq-ojlbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:space-shuttle-duo"} {...others} />);
}

export default Component;
