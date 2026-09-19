import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysq1xfblj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ysq1xfblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:spray-can-sparkles"} {...others} />);
}

export default Component;
