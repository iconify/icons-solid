import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/s_yc880na.css';
import '../../css/r/r1soh6b2r.css';
import '../../css/r/r6zzsmb6r.css';
import '../../css/p/pfb0nubbx.css';
import '../../css/p/pniei9crh.css';
import '../../css/e/egl7f3bmr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="s_yc880na"/><path class="r1soh6b2r"/><path class="r6zzsmb6r"/><path class="pfb0nubbx"/><path class="pniei9crh"/><path class="egl7f3bmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:repositioning"} {...others} />);
}

export default Component;
