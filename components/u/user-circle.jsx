import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbst8zz0t.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/z/z8x8bkbkr.css';
import '../../css/w/w26ehabue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wbst8zz0t"/><circle transform="rotate(90 12 12)" class="mpf1g8bav"/><path class="z8x8bkbkr"/><path class="w26ehabue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-circle"} {...others} />);
}

export default Component;
