import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxxgrebhp.css';
import '../../css/w/w315qtb4v.css';
import '../../css/e/eufxlac6z.css';
import '../../css/m/mxv__tb1o.css';
import '../../css/l/li99fb7xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hxxgrebhp"/><path class="w315qtb4v"/><path class="eufxlac6z"/><path class="mxv__tb1o"/><path class="li99fb7xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:pasta-bowl-warm"} {...others} />);
}

export default Component;
