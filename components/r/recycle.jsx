import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1yhedw5p.css';
import '../../css/m/mxnmhdsne.css';
import '../../css/p/plpa1obuz.css';
import '../../css/a/af3lmqb9a.css';
import '../../css/z/z6kwid99t.css';
import '../../css/c/cscdk_7sq.css';
import '../../css/b/b7-k9abto.css';
import '../../css/j/j_9dkglsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g1yhedw5p wm-shadow"/><path class="mxnmhdsne wm-shadow"/><path class="plpa1obuz"/><path class="af3lmqb9a"/><path class="z6kwid99t"/><path class="cscdk_7sq"/><path class="b7-k9abto wm-shine"/><path class="j_9dkglsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:recycle"} {...others} />);
}

export default Component;
