import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mypu06b1o.css';
import '../../css/m/mha1hgghy.css';
import '../../css/q/q90pbz13v.css';
import '../../css/p/pkw85zb3z.css';
import '../../css/m/ms0hcdcsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mypu06b1o"/><path class="mha1hgghy"/><path class="q90pbz13v"/><path class="pkw85zb3z"/><path class="ms0hcdcsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:harddisk-4"} {...others} />);
}

export default Component;
