import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qygv4bbtf.css';
import '../../css/c/c37msdwqu.css';
import '../../css/j/jh-jfdc-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qygv4bbtf"/><path class="c37msdwqu"/><path class="jh-jfdc-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sticky-note-check-duotone"} {...others} />);
}

export default Component;
