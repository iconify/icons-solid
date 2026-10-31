import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wf9lekb8b.css';
import '../../css/p/prqshyb1g.css';
import '../../css/d/devv44bfd.css';
import '../../css/x/xjqyizgxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wf9lekb8b wm-shadow"/><path class="prqshyb1g wm-shadow"/><path class="devv44bfd"/><path class="xjqyizgxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:guitar"} {...others} />);
}

export default Component;
