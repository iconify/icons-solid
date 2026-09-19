import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl8xq5ujb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sl8xq5ujb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:numbered-list-20-solid"} {...others} />);
}

export default Component;
