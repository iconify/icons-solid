import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejyy-r0nx.css';
import '../../css/z/z4bh7cczu.css';
import '../../css/a/at9p7vvwe.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ejyy-r0nx"/><path class="z4bh7cczu"/><path class="at9p7vvwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pinched-fingers-light"} {...others} />);
}

export default Component;
