import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3roe6gyn.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="l3roe6gyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:heart-circle"} {...others} />);
}

export default Component;
