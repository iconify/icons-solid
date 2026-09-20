import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y52g8ubua.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/x/xc30fvbjn.css';
import '../../css/o/o5_dnnb5d.css';
import '../../css/i/itbph-bbx.css';
import '../../css/m/m8195sbyc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y52g8ubua"/><g class="brzn_0bpr"><path class="xc30fvbjn"/><path class="o5_dnnb5d"/><path class="itbph-bbx"/><circle class="m8195sbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stick-figure-leaning-left"} {...others} />);
}

export default Component;
