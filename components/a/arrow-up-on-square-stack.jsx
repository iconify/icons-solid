import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo4v4hbni.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="oo4v4hbni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:arrow-up-on-square-stack"} {...others} />);
}

export default Component;
