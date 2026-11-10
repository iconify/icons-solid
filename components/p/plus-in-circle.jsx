import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy-3afbxr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vy-3afbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:plus-in-circle"} {...others} />);
}

export default Component;
