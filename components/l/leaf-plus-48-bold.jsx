import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgde9kd7j.css';
import '../../css/u/ui4laccyj.css';
import '../../css/i/it04kcbvr.css';
import '../../css/g/gsyd5vmtp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qgde9kd7j"/><path class="ui4laccyj"/><path class="it04kcbvr"/><path class="gsyd5vmtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-plus-48-bold"} {...others} />);
}

export default Component;
