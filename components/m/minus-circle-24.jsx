import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8lc7zb3l.css';
import '../../css/n/nc55f-bpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s8lc7zb3l"/><path clip-rule="evenodd" class="nc55f-bpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:minus-circle-24"} {...others} />);
}

export default Component;
