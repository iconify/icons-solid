import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhqb61bvf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yhqb61bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:word-cloud-outline"} {...others} />);
}

export default Component;
