import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7xghib3z.css';
import '../../css/v/vj_a13g5b.css';
import '../../css/c/cpp7jvb2k.css';
import '../../css/w/wc4n8bbbu.css';
import '../../css/q/q4hmgyfpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r7xghib3z"/><path class="vj_a13g5b"/><path class="cpp7jvb2k"/><path class="wc4n8bbbu"/><path class="q4hmgyfpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:temperature-thermometer-up"} {...others} />);
}

export default Component;
