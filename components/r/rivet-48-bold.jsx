import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8j44qm-v.css';
import '../../css/q/q7zl1sbxo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d8j44qm-v"/><path class="q7zl1sbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rivet-48-bold"} {...others} />);
}

export default Component;
