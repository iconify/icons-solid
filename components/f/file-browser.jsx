import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b9eb8tarh.css';
import '../../css/y/yn1j_2dsw.css';
import '../../css/z/zb727qsvo.css';
import '../../css/s/svoggybtb.css';
import '../../css/z/zme3bg8tu.css';
import '../../css/d/d17yesb1a.css';
import '../../css/d/d5ych9bye.css';
import '../../css/e/e5tnsib4t.css';
import '../../css/g/g5yy05bwo.css';
import '../../css/f/fd2t0nr8y.css';
import '../../css/o/onzj9bbqc.css';
import '../../css/s/scqloszjc.css';

const viewBox = {"width":560,"height":560};
const content = `<g class="d2kvgvbvc"><path class="b9eb8tarh"/><path class="yn1j_2dsw"/><path class="zb727qsvo"/><path class="svoggybtb"/><path class="zme3bg8tu"/><path class="d17yesb1a"/><path class="d5ych9bye"/><path class="e5tnsib4t"/><path class="g5yy05bwo"/><path class="fd2t0nr8y"/><path class="onzj9bbqc"/><path class="scqloszjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:file-browser"} {...others} />);
}

export default Component;
