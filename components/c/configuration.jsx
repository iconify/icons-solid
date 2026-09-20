import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0ksu7uqw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z0ksu7uqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:configuration"} {...others} />);
}

export default Component;
