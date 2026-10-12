import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2ag1nw1z.css';
import '../../css/v/v_cmgvbqv.css';
import '../../css/l/l-1jopsyu.css';
import '../../css/y/y3avrusqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v2ag1nw1z"/><circle transform="rotate(90 16.39 6.37)" class="v_cmgvbqv"/><path class="l-1jopsyu"/><path class="y3avrusqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mic-vocal"} {...others} />);
}

export default Component;
