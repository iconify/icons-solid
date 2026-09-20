import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/t/tfs06nb8p.css';
import '../../css/m/mqw7ahb6a.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="tfs06nb8p"/><path class="mqw7ahb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:jump-right"} {...others} />);
}

export default Component;
