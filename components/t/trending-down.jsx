import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnih7ubew.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="pnih7ubew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:trending-down"} {...others} />);
}

export default Component;
