import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7fkjwj6c.css';
import '../../css/p/pwsprdbki.css';
import '../../css/w/wlr7lp3_b.css';
import '../../css/f/fgme9x7_s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h7fkjwj6c"/><path class="pwsprdbki"/><path class="wlr7lp3_b"/><path class="fgme9x7_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:heart-with-arrow"} {...others} />);
}

export default Component;
