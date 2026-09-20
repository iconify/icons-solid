import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxh6mvbjx.css';
import '../../css/b/bazg25bxb.css';
import '../../css/t/t9729-8ks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qxh6mvbjx"/><path class="bazg25bxb"/><path class="t9729-8ks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cloud-disable"} {...others} />);
}

export default Component;
