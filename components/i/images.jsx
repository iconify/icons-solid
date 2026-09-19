import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4-w4rbmj.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="s4-w4rbmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:images"} {...others} />);
}

export default Component;
