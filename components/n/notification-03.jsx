import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hukg_nb-f.css';
import '../../css/u/un9gz-7ua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hukg_nb-f"/><path class="un9gz-7ua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-03"} {...others} />);
}

export default Component;
