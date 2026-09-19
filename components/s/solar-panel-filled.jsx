import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqz6vo-oc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqz6vo-oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:solar-panel-filled"} {...others} />);
}

export default Component;
