import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3s8q4bhy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l3s8q4bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:rectangle"} {...others} />);
}

export default Component;
