import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0h_kbs6z.css';
import '../../css/i/i10epfbks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0h_kbs6z"/><path class="i10epfbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-copyright"} {...others} />);
}

export default Component;
