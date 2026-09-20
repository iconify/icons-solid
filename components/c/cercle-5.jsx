import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i01g5y-bj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i01g5y-bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:cercle-5"} {...others} />);
}

export default Component;
