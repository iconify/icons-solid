import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lggynxb6a.css';
import '../../css/e/eyfcvmxim.css';
import '../../css/g/gsjgkj1hq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lggynxb6a"/><path class="eyfcvmxim"/><path class="gsjgkj1hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:recycle-bin"} {...others} />);
}

export default Component;
