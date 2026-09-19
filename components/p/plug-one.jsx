import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/q2imly_dx.css';
import '../../css/n/nc1hzx8vr.css';
import '../../css/m/mg2vvdbge.css';
import '../../css/e/eb8fy6btr.css';
import '../../css/d/diqj5jb-k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="q2imly_dx"/><path class="nc1hzx8vr"/><path class="mg2vvdbge"/><path class="eb8fy6btr"/><path class="diqj5jb-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:plug-one"} {...others} />);
}

export default Component;
