import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7_udwd8d.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="e7_udwd8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrow-right-start-on-rectangle-16-solid"} {...others} />);
}

export default Component;
