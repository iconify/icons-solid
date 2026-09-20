import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgg9tabhr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dgg9tabhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:paragraph-7"} {...others} />);
}

export default Component;
