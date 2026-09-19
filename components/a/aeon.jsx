import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq_4j7bmk.css';
import '../../css/m/md286fbip.css';
import '../../css/u/uf86vvbqt.css';
import '../../css/q/q9ym_puwj.css';
import '../../css/l/lqaygtt6c.css';
import '../../css/j/j4le1c7ds.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="pq_4j7bmk"/><g class="md286fbip"><path class="uf86vvbqt"/><path class="q9ym_puwj"/><path class="lqaygtt6c"/><path class="j4le1c7ds"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:aeon"} {...others} />);
}

export default Component;
