import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3u-g3b9s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g3u-g3b9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:iterations-16"} {...others} />);
}

export default Component;
