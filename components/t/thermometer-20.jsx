import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc18sub8n.css';
import '../../css/i/iuqdpw_hh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gc18sub8n"/><path class="iuqdpw_hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-20"} {...others} />);
}

export default Component;
