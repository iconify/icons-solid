import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgde9kd7j.css';
import '../../css/u/ui4laccyj.css';
import '../../css/x/x-w4dbc6n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qgde9kd7j"/><path class="ui4laccyj"/><path class="x-w4dbc6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-alert-48-bold"} {...others} />);
}

export default Component;
