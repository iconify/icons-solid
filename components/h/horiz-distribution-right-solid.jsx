import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5jrfnb1l.css';
import '../../css/y/yxfs3nbpx.css';
import '../../css/n/nuyjr3i2v.css';
import '../../css/n/nn-_ctbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l5jrfnb1l"/><path class="yxfs3nbpx"/><path class="nuyjr3i2v"/><path class="nn-_ctbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:horiz-distribution-right-solid"} {...others} />);
}

export default Component;
