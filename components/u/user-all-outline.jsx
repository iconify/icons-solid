import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr97u2_pp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kr97u2_pp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:user-all-outline"} {...others} />);
}

export default Component;
