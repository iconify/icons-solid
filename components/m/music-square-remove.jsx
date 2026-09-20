import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c37_ywsig.css';
import '../../css/l/lkq7kmb6r.css';
import '../../css/t/t6huvucqa.css';
import '../../css/m/mqjqek82p.css';
import '../../css/c/coexzcbbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c37_ywsig"/><path class="lkq7kmb6r"/><path class="t6huvucqa"/><path class="mqjqek82p"/><path class="coexzcbbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-square-remove"} {...others} />);
}

export default Component;
