import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd9s1h7jm.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="yd9s1h7jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:health-data-sync"} {...others} />);
}

export default Component;
