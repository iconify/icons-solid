import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os1tv9bdr.css';
import '../../css/k/k56y4je-b.css';
import '../../css/c/cpplsub3r.css';
import '../../css/g/gjioqv1rp.css';
import '../../css/k/krpfik0bb.css';
import '../../css/e/ebdo6v8hk.css';
import '../../css/i/ioecffbxg.css';
import '../../css/c/czprhrk7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="os1tv9bdr"/><path class="k56y4je-b"/><path class="cpplsub3r"/><path class="gjioqv1rp"/><path class="krpfik0bb"/><path class="ebdo6v8hk"/><path class="ioecffbxg"/><path class="czprhrk7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-desk-2"} {...others} />);
}

export default Component;
