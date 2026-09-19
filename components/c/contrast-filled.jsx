import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4oluribo.css';
import '../../css/c/c112rwb3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4oluribo"/><path class="c112rwb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:contrast-filled"} {...others} />);
}

export default Component;
