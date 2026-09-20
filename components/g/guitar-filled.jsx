import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4mtfqb_h.css';
import '../../css/r/racdv353u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q4mtfqb_h"/><path class="racdv353u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:guitar-filled"} {...others} />);
}

export default Component;
