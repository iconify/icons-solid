import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic6wf_bti.css';
import '../../css/h/h-x55eb4t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ic6wf_bti"/><path class="h-x55eb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:americasglobe"} {...others} />);
}

export default Component;
