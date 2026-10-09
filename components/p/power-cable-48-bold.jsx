import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfbb1fbyd.css';
import '../../css/h/h4_86xb7u.css';
import '../../css/o/o8n6aqd3r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kfbb1fbyd"/><path class="h4_86xb7u"/><path class="o8n6aqd3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-cable-48-bold"} {...others} />);
}

export default Component;
