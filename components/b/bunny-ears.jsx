import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g79xchnzj.css';
import '../../css/u/uext8doez.css';
import '../../css/b/bam3z1bia.css';
import '../../css/w/w5h-058cc.css';
import '../../css/b/bjiytfbha.css';
import '../../css/a/as8w7cbbo.css';
import '../../css/m/my3n0ab2r.css';
import '../../css/q/qqqvz6bfh.css';
import '../../css/d/d883xgb6s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g79xchnzj"/><path class="uext8doez"/><path class="bam3z1bia"/><path class="w5h-058cc"/><path class="bjiytfbha"/><path class="as8w7cbbo"/><path class="my3n0ab2r"/><path class="qqqvz6bfh"/><path class="d883xgb6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bunny-ears"} {...others} />);
}

export default Component;
