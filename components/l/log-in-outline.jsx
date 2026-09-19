import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gco9hqb4k.css';
import '../../css/o/ovur34-xv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gco9hqb4k"/><path class="ovur34-xv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:log-in-outline"} {...others} />);
}

export default Component;
