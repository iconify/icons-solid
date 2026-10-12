import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2-mnxbvo.css';
import '../../css/n/n6cewtbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="g2-mnxbvo"/><ellipse class="n6cewtbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ellipse"} {...others} />);
}

export default Component;
