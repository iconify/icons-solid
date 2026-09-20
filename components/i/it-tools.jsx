import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty2gosb3o.css';
import '../../css/j/j70cc-b_m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ty2gosb3o"/><path class="j70cc-b_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:it-tools"} {...others} />);
}

export default Component;
