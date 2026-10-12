import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7it3kbjv.css';
import '../../css/u/u5rk34b7w.css';
import '../../css/b/byfs_db6m.css';
import '../../css/g/g7-z5_thi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f7it3kbjv"/><path class="u5rk34b7w"/><path class="byfs_db6m"/><path class="g7-z5_thi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-shield-duotone"} {...others} />);
}

export default Component;
