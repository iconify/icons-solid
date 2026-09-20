import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh8lsuzqg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mh8lsuzqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:box-1"} {...others} />);
}

export default Component;
