import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/leymwlb0u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="leymwlb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:data-screen-outline"} {...others} />);
}

export default Component;
