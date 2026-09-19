import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsidy9_gt.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="lsidy9_gt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:circle-pause"} {...others} />);
}

export default Component;
