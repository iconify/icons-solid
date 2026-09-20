import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5rpebc0l.css';
import '../../css/q/qcg7m2bgq.css';
import '../../css/v/vezvibchg.css';
import '../../css/z/z5eaxhbyw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="f5rpebc0l"/><path class="qcg7m2bgq"/><path class="vezvibchg"/><path class="z5eaxhbyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:sun-cloud"} {...others} />);
}

export default Component;
