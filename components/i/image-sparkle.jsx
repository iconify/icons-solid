import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7kjkhb6x.css';
import '../../css/q/qk4flbb6u.css';
import '../../css/f/f2ju90u-t.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d7kjkhb6x"/><path class="qk4flbb6u"/><path class="f2ju90u-t"/><path class="zapwtgb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-sparkle"} {...others} />);
}

export default Component;
