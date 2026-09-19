import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u31l4ebpx.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="u31l4ebpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:submit"} {...others} />);
}

export default Component;
