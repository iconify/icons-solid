import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-8lt-98s.css';
import '../../css/c/c-h10xb6w.css';
import '../../css/w/w3kz0dbvt.css';
import '../../css/y/yn2mwibll.css';
import '../../css/o/ob162o_ip.css';
import '../../css/o/o0gl6hboj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u-8lt-98s"/><path class="c-h10xb6w"/><path class="w3kz0dbvt"/><path class="yn2mwibll"/><path class="ob162o_ip"/><path class="o0gl6hboj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:baseball-bat-ball"} {...others} />);
}

export default Component;
