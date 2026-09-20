import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj-n85ffv.css';
import '../../css/u/uiico6v5s.css';
import '../../css/w/wu5jmy22e.css';
import '../../css/i/iyfihfbby.css';
import '../../css/u/uqdu66o3d.css';
import '../../css/b/bswg7-4lf.css';
import '../../css/m/m0a2dvb6x.css';
import '../../css/c/cxy6m0boi.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yj-n85ffv"/><path class="uiico6v5s"/><path class="wu5jmy22e"/><path class="iyfihfbby"/><path class="uqdu66o3d"/><path class="bswg7-4lf"/><path class="m0a2dvb6x"/><path class="cxy6m0boi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-frowning"} {...others} />);
}

export default Component;
