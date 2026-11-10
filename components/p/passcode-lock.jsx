import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyph4f9nq.css';
import '../../css/x/xy9_fdktb.css';
import '../../css/e/engyn55tx.css';
import '../../css/y/yatg6dbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hyph4f9nq"/><path clip-rule="evenodd" class="xy9_fdktb"/><path class="engyn55tx"/><path class="yatg6dbvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:passcode-lock"} {...others} />);
}

export default Component;
