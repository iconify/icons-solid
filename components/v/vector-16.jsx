import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gae6d5d6e.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="gae6d5d6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:vector-16"} {...others} />);
}

export default Component;
