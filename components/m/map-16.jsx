import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-osqbb5m.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="w-osqbb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:map-16"} {...others} />);
}

export default Component;
