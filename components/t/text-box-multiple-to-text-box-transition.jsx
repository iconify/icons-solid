import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/g/g_wfhb.css';
import '../../css/j/jin-gx.css';
import '../../css/d/d-0mee5h.css';
import '../../css/d/d-r5jj3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c g_wfhb"/><path class="a0m25c jin-gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:text-box-multiple-to-text-box-transition"} {...others} />);
}

export default Component;
