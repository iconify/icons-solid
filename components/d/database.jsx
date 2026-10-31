import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ubuf0l-kw.css';
import '../../css/h/h20pzcb1e.css';
import '../../css/e/e5e8fq4db.css';
import '../../css/m/mrk4qwc0c.css';
import '../../css/t/tcxxukgzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ubuf0l-kw wm-k"/><path class="h20pzcb1e wm-k"/><path class="e5e8fq4db wm-shadow"/><path class="mrk4qwc0c wm-shine"/><path class="tcxxukgzk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:database"} {...others} />);
}

export default Component;
