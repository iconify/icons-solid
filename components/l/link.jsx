import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga0gn9buc.css';
import '../../css/d/debuer2nt.css';
import '../../css/d/dyx_cdczd.css';
import '../../css/r/r2pcp77tz.css';
import '../../css/k/kv59h-b-j.css';
import '../../css/s/s39solrmy.css';
import '../../css/j/j95ei9b2k.css';
import '../../css/w/wo2bejb0s.css';
import '../../css/k/k8b0q1suk.css';
import '../../css/w/whdonotcz.css';
import '../../css/j/jle-aqbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ga0gn9buc wm-shadow"/><path class="debuer2nt wm-k"/><path class="dyx_cdczd wm-k"/><path class="r2pcp77tz wm-k"/><path class="kv59h-b-j wm-k"/><path class="s39solrmy wm-shine"/><path class="j95ei9b2k wm-a"/><path class="wm-a wo2bejb0s"/><path class="k8b0q1suk wm-a"/><path class="whdonotcz wm-a"/><path class="jle-aqbdt wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:link"} {...others} />);
}

export default Component;
