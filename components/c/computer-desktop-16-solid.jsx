import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_i0wab7f.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="e_i0wab7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:computer-desktop-16-solid"} {...others} />);
}

export default Component;
