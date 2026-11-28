import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjrepoc_l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b95_hgymw.css';
import '../../css/x/x9fr6zb2w.css';
import '../../css/g/g42oxqb6b.css';
import '../../css/a/aaii1gc4x.css';
import '../../css/n/nygych2zd.css';
import '../../css/i/ir7ibog_b.css';
import '../../css/y/yragkpbnw.css';
import '../../css/t/t27nptbks.css';
import '../../css/f/fyulfg5wf.css';
import '../../css/u/u4hrkrb7e.css';
import '../../css/k/kvzni7aov.css';
import '../../css/q/q2601-kmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qjrepoc_l secondary"/><g class="dt0cm9dhy primary"><path class="b95_hgymw"/><path class="x9fr6zb2w"/><path class="g42oxqb6b"/><path class="aaii1gc4x"/><path class="nygych2zd"/><path class="ir7ibog_b"/><path class="yragkpbnw"/><path class="t27nptbks"/><path class="fyulfg5wf"/><path class="u4hrkrb7e"/><path class="kvzni7aov"/><path class="q2601-kmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grip-vertical-duo"} {...others} />);
}

export default Component;
