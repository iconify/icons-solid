import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4d07tkli.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k4d07tkli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:right-square-outline"} {...others} />);
}

export default Component;
