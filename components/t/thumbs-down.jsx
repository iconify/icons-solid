import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/w9ohxtb1d.css';
import '../../css/a/aykpsibos.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="w9ohxtb1d"/><path class="aykpsibos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:thumbs-down"} {...others} />);
}

export default Component;
