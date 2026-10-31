import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iazfvxb7z.css';
import '../../css/h/hcev6cqxk.css';
import '../../css/t/t6tpf4bmw.css';
import '../../css/x/x4e1woonj.css';
import '../../css/j/j7h_g467j.css';
import '../../css/w/wo89xnbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="iazfvxb7z"/><path class="hcev6cqxk"/><path class="t6tpf4bmw wm-shine"/><path class="wm-k x4e1woonj"/><path class="j7h_g467j wm-a"/><path class="wm-deco wo89xnbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bauble"} {...others} />);
}

export default Component;
