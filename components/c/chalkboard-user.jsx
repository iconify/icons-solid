import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x13x7hbqs.css';
import '../../css/l/lv7l4ebet.css';
import '../../css/y/ylyvn55cw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x13x7hbqs"/><path class="lv7l4ebet"/><path class="ylyvn55cw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chalkboard-user"} {...others} />);
}

export default Component;
