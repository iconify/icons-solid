import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-qj9udtx.css';
import '../../css/y/ymljeobsu.css';
import '../../css/s/se8vs5b7y.css';
import '../../css/p/pvk0wrb7l.css';
import '../../css/f/fdcwgl2hr.css';
import '../../css/x/x4-hzj80e.css';
import '../../css/s/skl1y5-uy.css';
import '../../css/q/qycwxxgrx.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="n-qj9udtx"/><path class="ymljeobsu"/><path class="se8vs5b7y"/><path class="pvk0wrb7l"/><path class="fdcwgl2hr"/><path class="x4-hzj80e"/><circle class="skl1y5-uy"/><path class="qycwxxgrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:nu-4x3"} {...others} />);
}

export default Component;
