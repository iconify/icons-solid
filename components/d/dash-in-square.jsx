import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd0-3i1_r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bd0-3i1_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:dash-in-square"} {...others} />);
}

export default Component;
