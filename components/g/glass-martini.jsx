import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-g__d1hd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r-g__d1hd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:glass-martini"} {...others} />);
}

export default Component;
