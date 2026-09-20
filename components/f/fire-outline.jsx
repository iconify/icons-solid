import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr0ffdc1x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yr0ffdc1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:fire-outline"} {...others} />);
}

export default Component;
