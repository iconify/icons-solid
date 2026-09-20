import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p61-0ivql.css';
import '../../css/k/kc61xi-3d.css';
import '../../css/r/r73utib8z.css';
import '../../css/u/u7il1rbog.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p61-0ivql"/><path class="kc61xi-3d"/><path class="r73utib8z"/><path class="u7il1rbog"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-syria"} {...others} />);
}

export default Component;
