import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b837vfy4a.css';
import '../../css/l/lwyiznbto.css';
import '../../css/x/x0n-n6-cw.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fgu_0r91r.css';
import '../../css/u/uxrtq99eg.css';
import '../../css/m/mxmih12ei.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b837vfy4a"/><path class="lwyiznbto"/><path class="x0n-n6-cw"/><g class="jn8qy4bru"><path class="fgu_0r91r"/><path class="uxrtq99eg"/><path class="mxmih12ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:necktie"} {...others} />);
}

export default Component;
