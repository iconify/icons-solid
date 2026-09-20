import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vf5b9zb0i.css';
import '../../css/l/ljgxpm2bj.css';
import '../../css/q/q_e94hyle.css';
import '../../css/g/gbvdhot5z.css';
import '../../css/a/a992ldbjx.css';
import '../../css/e/eoibert9g.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/y/yc2tbznnz.css';
import '../../css/f/f2h937c9b.css';
import '../../css/v/vv-890z0r.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="vf5b9zb0i"><path class="ljgxpm2bj"/><path class="q_e94hyle"/><path class="gbvdhot5z"/><path class="a992ldbjx"/><path class="eoibert9g"/></g><g class="jn8qy4bru"><path class="yc2tbznnz"/><path class="f2h937c9b"/><path class="vv-890z0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:crossed-fingers-medium-dark-skin-tone"} {...others} />);
}

export default Component;
