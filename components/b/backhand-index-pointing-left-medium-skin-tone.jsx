import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f--rpx6kf.css';
import '../../css/z/zlpdybbzv.css';
import '../../css/t/tlf1ceoxw.css';
import '../../css/l/lhw1aobqk.css';
import '../../css/b/b99x29kan.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/ldnc22yvg.css';
import '../../css/b/bq0t5yxjd.css';
import '../../css/e/ebte6q1ja.css';
import '../../css/l/lbpl2objt.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="f--rpx6kf"><path class="zlpdybbzv"/><path class="tlf1ceoxw"/><path class="lhw1aobqk"/><path class="b99x29kan"/></g><g class="ij2x_72vy"><path class="ldnc22yvg"/><path class="bq0t5yxjd"/><path class="ebte6q1ja"/><path class="lbpl2objt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:backhand-index-pointing-left-medium-skin-tone"} {...others} />);
}

export default Component;
