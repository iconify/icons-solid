import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5xcf3m3b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m5xcf3m3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:cat"} {...others} />);
}

export default Component;
