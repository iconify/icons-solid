import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6ovz8bgh.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="y6ovz8bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:clear-filter-filled"} {...others} />);
}

export default Component;
