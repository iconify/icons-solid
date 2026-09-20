import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oewliqb1a.css';
import '../../css/c/cc1vgdb1t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oewliqb1a"/><path class="cc1vgdb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:meter-high-16"} {...others} />);
}

export default Component;
