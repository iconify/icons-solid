import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tjw-xwbxp.css';
import '../../css/h/hyayh_5kd.css';
import '../../css/e/efs10-b6r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="tjw-xwbxp"/><rect class="hyayh_5kd"/><rect class="efs10-b6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rock-gesture"} {...others} />);
}

export default Component;
