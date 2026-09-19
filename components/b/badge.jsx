import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q__y2nbzk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q__y2nbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:badge"} {...others} />);
}

export default Component;
