import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zokq24bza.css';
import '../../css/l/l6xxjlbxd.css';
import '../../css/x/x0sft3bom.css';
import '../../css/q/q7i-lqwlm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zokq24bza"/><path class="l6xxjlbxd"/><path class="x0sft3bom"/><path class="q7i-lqwlm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:church-48"} {...others} />);
}

export default Component;
