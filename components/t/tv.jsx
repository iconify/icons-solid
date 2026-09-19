import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvvtxpvpd.css';
import '../../css/b/b7efuubiv.css';
import '../../css/r/r0v312fps.css';
import '../../css/r/rpm_p1blj.css';
import '../../css/y/y6_gtab1x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="mvvtxpvpd"/><path class="b7efuubiv"/><path class="r0v312fps"/><path class="rpm_p1blj"/><rect class="y6_gtab1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tv"} {...others} />);
}

export default Component;
