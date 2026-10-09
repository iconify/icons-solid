import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmwoaz3te.css';
import '../../css/m/m6lmdhbxv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hmwoaz3te"/><path class="m6lmdhbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crane-hook-48-bold"} {...others} />);
}

export default Component;
