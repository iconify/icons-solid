import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qenv9tbnd.css';
import '../../css/t/tj44tabky.css';
import '../../css/w/wk6uvki7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qenv9tbnd"/><path class="tj44tabky"/><path class="wk6uvki7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sofa-duotone"} {...others} />);
}

export default Component;
