import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2nrf10bf.css';
import '../../css/y/y_xe1sj7j.css';
import '../../css/m/m972g7bwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2nrf10bf"/><path class="y_xe1sj7j"/><path class="m972g7bwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-sync-bold-duotone"} {...others} />);
}

export default Component;
