import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blhfqe0dt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="blhfqe0dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:box-3d-stroke-16"} {...others} />);
}

export default Component;
