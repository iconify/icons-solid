import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-qe7cb8t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v-qe7cb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:arrow-down-on-square"} {...others} />);
}

export default Component;
