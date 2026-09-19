import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph4laobgr.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="ph4laobgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:file-j-a-v-a"} {...others} />);
}

export default Component;
