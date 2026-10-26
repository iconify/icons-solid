import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/bv7go7mgj.css';
import '../../css/o/o5biosboo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="bv7go7mgj"/><path class="o5biosboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:news"} {...others} />);
}

export default Component;
