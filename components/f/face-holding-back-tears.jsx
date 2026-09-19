import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk1ifno5b.css';
import '../../css/o/ownjpub9i.css';
import '../../css/k/kk9qjc8qr.css';
import '../../css/d/dztiqybdg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mk1ifno5b"/><path class="ownjpub9i"/><path class="kk9qjc8qr"/><path class="dztiqybdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:face-holding-back-tears"} {...others} />);
}

export default Component;
