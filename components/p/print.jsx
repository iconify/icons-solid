import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szfhazbkv.css';
import '../../css/v/v-btizb5f.css';
import '../../css/h/hzianib4c.css';
import '../../css/z/zahy9l4ec.css';
import '../../css/v/v6gk7ab2u.css';
import '../../css/x/xcw8grw_c.css';
import '../../css/h/hrv5y2fzl.css';
import '../../css/g/gq0__kblq.css';
import '../../css/z/zuohnhbuh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="szfhazbkv"/><path class="v-btizb5f"/><path class="hzianib4c"/><circle class="zahy9l4ec"/><path class="v6gk7ab2u"/><path class="xcw8grw_c"/><path class="hrv5y2fzl"/><path class="gq0__kblq"/><path class="zuohnhbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:print"} {...others} />);
}

export default Component;
