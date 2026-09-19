import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-l4m5bsm.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="n-l4m5bsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:key-20-solid"} {...others} />);
}

export default Component;
