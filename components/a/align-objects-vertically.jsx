import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1ywfrbyu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t1ywfrbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:align-objects-vertically"} {...others} />);
}

export default Component;
