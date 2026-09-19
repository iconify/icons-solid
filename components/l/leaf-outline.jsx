import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uif2hsb6m.css';
import '../../css/m/m-2igxbdk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uif2hsb6m"/><path class="m-2igxbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:leaf-outline"} {...others} />);
}

export default Component;
