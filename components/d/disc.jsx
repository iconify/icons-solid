import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/aaq0mubke.css';
import '../../css/h/hl-p0b5nt.css';
import '../../css/e/et6v77b9p.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/f/fjmcwu-8t.css';
import '../../css/p/pts-xz34n.css';
import '../../css/j/je5_0is4h.css';
import '../../css/p/pay53oclz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="aaq0mubke"/><path class="hl-p0b5nt"/><path class="et6v77b9p wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="fjmcwu-8t wm-a"/><path class="pts-xz34n"/><path class="je5_0is4h"/><path class="pay53oclz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:disc"} {...others} />);
}

export default Component;
