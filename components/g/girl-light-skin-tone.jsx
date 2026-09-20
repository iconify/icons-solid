import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0_extypk.css';
import '../../css/p/pr5pgxb-z.css';
import '../../css/t/twxyyfbyf.css';
import '../../css/u/u6uyuab6r.css';
import '../../css/d/daw7yflav.css';
import '../../css/y/yl_s93czd.css';
import '../../css/p/phr03hb1k.css';
import '../../css/b/bfsk06z5k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k0_extypk"/><path class="pr5pgxb-z"/><path class="twxyyfbyf"/><path class="u6uyuab6r"/><path class="daw7yflav"/><path class="yl_s93czd"/><path class="phr03hb1k"/><path class="bfsk06z5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:girl-light-skin-tone"} {...others} />);
}

export default Component;
