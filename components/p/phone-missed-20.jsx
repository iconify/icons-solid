import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf5oxvb8k.css';
import '../../css/z/zjz25chpg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xf5oxvb8k"/><path class="zjz25chpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-missed-20"} {...others} />);
}

export default Component;
