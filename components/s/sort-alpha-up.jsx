import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srcf7abwa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="srcf7abwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:sort-alpha-up"} {...others} />);
}

export default Component;
