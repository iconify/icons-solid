import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvv6vdecf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pvv6vdecf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:plus-circle"} {...others} />);
}

export default Component;
