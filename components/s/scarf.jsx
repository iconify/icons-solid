import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-lha56mz.css';
import '../../css/g/gfp8d2etz.css';
import '../../css/v/vi350fb3v.css';
import '../../css/s/sszq-ro-t.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/o/o63fjzoeo.css';
import '../../css/l/l8udaw3yo.css';
import '../../css/d/dgxp57bqn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z-lha56mz"/><path class="gfp8d2etz"/><path class="vi350fb3v"/><path class="sszq-ro-t"/><g class="brzn_0bpr"><path class="o63fjzoeo"/><path class="l8udaw3yo"/><path class="dgxp57bqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:scarf"} {...others} />);
}

export default Component;
