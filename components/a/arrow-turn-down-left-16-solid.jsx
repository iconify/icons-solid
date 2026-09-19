import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm0v-e0ee.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xm0v-e0ee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-turn-down-left-16-solid"} {...others} />);
}

export default Component;
