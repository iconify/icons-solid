import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvcpwabzp.css';
import '../../css/e/efv81yb8v.css';
import '../../css/q/qxzz2d8fg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xvcpwabzp"/><path class="efv81yb8v"/><path class="qxzz2d8fg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:jack-o-lantern"} {...others} />);
}

export default Component;
