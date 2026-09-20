import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3lc7c9vm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g3lc7c9vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:arrow-outline-down"} {...others} />);
}

export default Component;
