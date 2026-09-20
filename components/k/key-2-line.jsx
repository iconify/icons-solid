import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olwdqqbhm.css';
import '../../css/d/d-e3iebub.css';
import '../../css/j/jawt9zm_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="olwdqqbhm"/><path clip-rule="evenodd" class="d-e3iebub"/><path class="jawt9zm_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:key-2-line"} {...others} />);
}

export default Component;
