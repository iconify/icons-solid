import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2gla-vtv.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="f2gla-vtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:hand-holding-dollar"} {...others} />);
}

export default Component;
