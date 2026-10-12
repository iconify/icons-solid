import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysx9685wi.css';
import '../../css/y/yx115lobs.css';
import '../../css/c/c4jqm5b5v.css';
import '../../css/r/rhwrewb6n.css';
import '../../css/l/lzmnrrp8b.css';
import '../../css/m/mxz5qbb3v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ysx9685wi"/><path class="yx115lobs"/><path class="c4jqm5b5v"/><path class="rhwrewb6n"/><path class="lzmnrrp8b"/><path class="mxz5qbb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-tank-x-20"} {...others} />);
}

export default Component;
