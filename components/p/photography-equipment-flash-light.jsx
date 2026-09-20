import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vcw47og0u.css';
import '../../css/o/o8ohi-l4p.css';
import '../../css/k/kd8t7p_fs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vcw47og0u"/><path class="o8ohi-l4p"/><path class="kd8t7p_fs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:photography-equipment-flash-light"} {...others} />);
}

export default Component;
