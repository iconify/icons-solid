import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8nh1h0nh.css';
import '../../css/y/yup83ubvn.css';
import '../../css/w/w19nkbctm.css';
import '../../css/c/cm0wrmbin.css';
import '../../css/t/t1__4yurh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="s8nh1h0nh"/><path class="yup83ubvn"/><path class="w19nkbctm"/><path class="cm0wrmbin"/><path class="t1__4yurh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:eagle"} {...others} />);
}

export default Component;
