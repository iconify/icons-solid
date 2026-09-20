import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n396llhtk.css';
import '../../css/t/twsgq7bgj.css';
import '../../css/o/o2zk-nrxv.css';
import '../../css/g/g_n51hb9l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n396llhtk"/><path class="twsgq7bgj"/><path class="o2zk-nrxv"/><path class="g_n51hb9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:steamgriddb"} {...others} />);
}

export default Component;
