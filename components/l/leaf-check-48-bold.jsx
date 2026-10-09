import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgde9kd7j.css';
import '../../css/u/ui4laccyj.css';
import '../../css/y/yc_dsr88x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qgde9kd7j"/><path class="ui4laccyj"/><path class="yc_dsr88x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-check-48-bold"} {...others} />);
}

export default Component;
