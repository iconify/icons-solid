import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtj8wjfye.css';
import '../../css/o/ohk9ijbrl.css';
import '../../css/z/z4yglv0kw.css';
import '../../css/w/wri8qfbki.css';
import '../../css/e/e2dmg7xua.css';
import '../../css/h/hiaxr9u4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gtj8wjfye wm-k"/><path class="ohk9ijbrl wm-k"/><path class="wm-k z4yglv0kw"/><path class="wm-k wri8qfbki"/><path class="e2dmg7xua wm-shine"/><path class="hiaxr9u4x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:ethernet-port"} {...others} />);
}

export default Component;
