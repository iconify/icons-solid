import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkarr2bij.css';
import '../../css/c/ctcoo0l_z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kkarr2bij"/><path class="ctcoo0l_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:parking-48-bold"} {...others} />);
}

export default Component;
