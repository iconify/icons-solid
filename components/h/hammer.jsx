import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccdx6tbjd.css';
import '../../css/z/zh0gym6cl.css';
import '../../css/w/w_bst9bxa.css';
import '../../css/i/il3tmib7w.css';
import '../../css/y/ydr3r47yt.css';
import '../../css/y/ya-l06blj.css';
import '../../css/w/wjfjkwbht.css';
import '../../css/g/g2nlulb_p.css';
import '../../css/t/thmpayghg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccdx6tbjd wm-shadow"/><path class="wm-k zh0gym6cl"/><path class="w_bst9bxa wm-k"/><path class="il3tmib7w wm-a"/><path class="wm-a ydr3r47yt"/><path class="wm-a ya-l06blj"/><path class="wjfjkwbht wm-a"/><path class="g2nlulb_p wm-a"/><path class="thmpayghg wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:hammer"} {...others} />);
}

export default Component;
