import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a84atto0y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a84atto0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:surveillance-cancelled"} {...others} />);
}

export default Component;
