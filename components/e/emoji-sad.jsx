import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/paa4elqqm.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="paa4elqqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:emoji-sad"} {...others} />);
}

export default Component;
