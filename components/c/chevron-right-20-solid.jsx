import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3290zb7w.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="x3290zb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chevron-right-20-solid"} {...others} />);
}

export default Component;
