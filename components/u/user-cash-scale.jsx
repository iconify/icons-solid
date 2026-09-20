import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef_iepb7z.css';
import '../../css/b/beztyxbwp.css';
import '../../css/o/oni1efbad.css';
import '../../css/w/wsggzwuij.css';
import '../../css/v/v82bzcbrq.css';
import '../../css/b/b3p0iso8h.css';
import '../../css/q/qiyvo30hh.css';
import '../../css/j/jwv5eu9ys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ef_iepb7z"/><path class="beztyxbwp"/><path class="oni1efbad"/><path class="wsggzwuij"/><path class="v82bzcbrq"/><path class="b3p0iso8h"/><path class="qiyvo30hh"/><path class="jwv5eu9ys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:user-cash-scale"} {...others} />);
}

export default Component;
