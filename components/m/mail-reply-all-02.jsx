import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fd0-ap5jh.css';
import '../../css/c/cznc6ybck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fd0-ap5jh"/><path class="cznc6ybck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-reply-all-02"} {...others} />);
}

export default Component;
