import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic2trybrb.css';
import '../../css/y/yj8n5jbxd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ic2trybrb"/><path class="yj8n5jbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:umbrella-20"} {...others} />);
}

export default Component;
