import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dw5ytqb0r.css';
import '../../css/q/qxer-psyq.css';
import '../../css/p/puqf4_wsy.css';
import '../../css/k/kh7vpdbfc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dw5ytqb0r"/><path class="qxer-psyq"/><path class="puqf4_wsy"/><path class="kh7vpdbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:decent-work-and-economic-growth"} {...others} />);
}

export default Component;
