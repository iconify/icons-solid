import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jw6rkebmt.css';
import '../../css/s/ss8lgbcwv.css';
import '../../css/p/psdc-ub0r.css';
import '../../css/a/a4ypdebsh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="jw6rkebmt"/><path class="ss8lgbcwv"/><path class="psdc-ub0r"/><circle class="a4ypdebsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:scissors"} {...others} />);
}

export default Component;
