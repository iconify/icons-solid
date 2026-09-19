import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsn_v_jiy.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="jsn_v_jiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-small-left-20-solid"} {...others} />);
}

export default Component;
