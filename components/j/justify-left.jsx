import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri_vl6b7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ri_vl6b7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:justify-left"} {...others} />);
}

export default Component;
