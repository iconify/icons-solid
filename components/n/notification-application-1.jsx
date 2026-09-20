import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c24zg0cgc.css';
import '../../css/n/n9h8i4b5h.css';
import '../../css/f/fk-oe3z5u.css';
import '../../css/l/l9luet0rh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="c24zg0cgc"/><path class="n9h8i4b5h"/><path class="fk-oe3z5u"/><path class="l9luet0rh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:notification-application-1"} {...others} />);
}

export default Component;
