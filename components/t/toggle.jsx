import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8ieu8bex.css';
import '../../css/v/vp5jnab-c.css';
import '../../css/a/awhb76znz.css';
import '../../css/q/q730qqbko.css';
import '../../css/g/gqvngdbjz.css';
import '../../css/j/j8n6uop3k.css';
import '../../css/p/phezembqu.css';
import '../../css/e/e6llbvnxn.css';
import '../../css/e/ede9fnbih.css';
import '../../css/g/gojchulss.css';
import '../../css/f/fpcwc_pen.css';
import '../../css/a/are87lb3j.css';
import '../../css/n/nlkcnwp6m.css';
import '../../css/v/v0aorbbag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow x8ieu8bex"/><path class="vp5jnab-c wm-k"/><path class="awhb76znz wm-k"/><path class="q730qqbko wm-k"/><path class="gqvngdbjz wm-k"/><path class="j8n6uop3k wm-shine"/><path class="phezembqu wm-k"/><path class="e6llbvnxn wm-a"/><path class="ede9fnbih wm-a"/><path class="gojchulss wm-a"/><path class="fpcwc_pen wm-a"/><path class="are87lb3j wm-a"/><path class="nlkcnwp6m wm-a"/><path class="v0aorbbag wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:toggle"} {...others} />);
}

export default Component;
