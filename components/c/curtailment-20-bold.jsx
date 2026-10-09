import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc7msjb7m.css';
import '../../css/b/bdgh64buo.css';
import '../../css/g/gxsgqfbzc.css';
import '../../css/q/qnfhe3b6k.css';
import '../../css/t/trfzb5bjj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oc7msjb7m"/><path class="bdgh64buo"/><path class="gxsgqfbzc"/><path class="qnfhe3b6k"/><path class="trfzb5bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:curtailment-20-bold"} {...others} />);
}

export default Component;
