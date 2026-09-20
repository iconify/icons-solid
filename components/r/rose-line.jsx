import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buu_4mbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="buu_4mbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rose-line"} {...others} />);
}

export default Component;
