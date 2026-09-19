import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdo3n95-y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wdo3n95-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:bars-3-center-left-16-solid"} {...others} />);
}

export default Component;
