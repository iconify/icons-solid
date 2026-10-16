import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt8f-3eoh.css';
import '../../css/i/i0ed3gb6r.css';
import '../../css/i/ilel_r_ca.css';
import '../../css/s/stu8q3lpz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dt8f-3eoh"/><path class="i0ed3gb6r"/><path class="ilel_r_ca"/><path class="stu8q3lpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-sync-20-bold"} {...others} />);
}

export default Component;
