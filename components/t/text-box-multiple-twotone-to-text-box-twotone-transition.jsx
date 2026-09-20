import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/j/j6sn3x.css';
import '../../css/h/hrkd6c.css';
import '../../css/d/d-0mee5h.css';
import '../../css/d/d-r5jj3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew j6sn3x"/><path class="hrkd6c iw1iew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:text-box-multiple-twotone-to-text-box-twotone-transition"} {...others} />);
}

export default Component;
