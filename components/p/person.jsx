import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3ao4i3ot.css';
import '../../css/i/i7bjsj-gj.css';
import '../../css/h/homen1bjn.css';
import '../../css/g/g37dtobwj.css';
import '../../css/m/mq443_byy.css';
import '../../css/s/sjmu1ab5r.css';
import '../../css/q/q9w1kzbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p3ao4i3ot"/><path class="i7bjsj-gj"/><path class="homen1bjn"/><path class="g37dtobwj"/><path class="mq443_byy"/><path class="sjmu1ab5r"/><path class="q9w1kzbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:person"} {...others} />);
}

export default Component;
