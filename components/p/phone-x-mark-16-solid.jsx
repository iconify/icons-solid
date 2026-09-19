import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6ijimd2c.css';
import '../../css/v/vt4x3hbdv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i6ijimd2c"/><path class="vt4x3hbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:phone-x-mark-16-solid"} {...others} />);
}

export default Component;
