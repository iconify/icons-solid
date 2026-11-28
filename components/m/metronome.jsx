import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wttwc7bye.css';
import '../../css/p/pgt6w1b0j.css';
import '../../css/q/qtmyn7x6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wttwc7bye"/><path class="pgt6w1b0j"/><path class="qtmyn7x6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:metronome"} {...others} />);
}

export default Component;
