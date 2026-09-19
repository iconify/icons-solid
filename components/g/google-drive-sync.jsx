import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kk2njkbuf.css';
import '../../css/q/qo1f1obln.css';
import '../../css/b/bhgumod8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kk2njkbuf"/><path class="qo1f1obln"/><path class="bhgumod8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:google-drive-sync"} {...others} />);
}

export default Component;
