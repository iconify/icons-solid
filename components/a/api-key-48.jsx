import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzeztmj2w.css';
import '../../css/e/e9-17_hwj.css';
import '../../css/g/gsdjs9b8k.css';
import '../../css/u/uoo0tpb9l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mzeztmj2w"/><path class="e9-17_hwj"/><path class="gsdjs9b8k"/><path class="uoo0tpb9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:api-key-48"} {...others} />);
}

export default Component;
