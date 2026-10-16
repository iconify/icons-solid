import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqiw7wq1k.css';
import '../../css/u/u_7j5cbnz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xqiw7wq1k"/><path class="u_7j5cbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:used-cooking-oil-48"} {...others} />);
}

export default Component;
