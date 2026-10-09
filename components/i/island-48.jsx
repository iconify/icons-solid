import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-kpumbeo.css';
import '../../css/j/j98ub3buk.css';
import '../../css/k/kgoatob5h.css';
import '../../css/t/txtl48bjd.css';
import '../../css/w/w-e6kfbsm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j-kpumbeo"/><path class="j98ub3buk"/><path class="kgoatob5h"/><path class="txtl48bjd"/><path class="w-e6kfbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:island-48"} {...others} />);
}

export default Component;
