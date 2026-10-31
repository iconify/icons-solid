import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hoj8v6b7h.css';
import '../../css/z/zwp03acls.css';
import '../../css/i/irc-6z45a.css';
import '../../css/p/p3_1izxve.css';
import '../../css/a/auf99mbov.css';
import '../../css/t/tjpr_-bee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hoj8v6b7h wm-shadow"/><path class="zwp03acls"/><path class="irc-6z45a"/><path class="p3_1izxve"/><path class="auf99mbov"/><path class="tjpr_-bee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:settings-2"} {...others} />);
}

export default Component;
