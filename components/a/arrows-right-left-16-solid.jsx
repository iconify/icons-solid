import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0xrvnbjp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="q0xrvnbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrows-right-left-16-solid"} {...others} />);
}

export default Component;
