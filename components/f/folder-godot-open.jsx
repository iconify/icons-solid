import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa0d9wb7d.css';
import '../../css/r/rz1q6nuvq.css';
import '../../css/x/xrnpo0biw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qa0d9wb7d"/><path class="rz1q6nuvq"/><path class="xrnpo0biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-godot-open"} {...others} />);
}

export default Component;
