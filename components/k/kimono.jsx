import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yssc87bli.css';
import '../../css/u/uxtf7gb4w.css';
import '../../css/u/uogpfrorl.css';
import '../../css/c/cizw5-z8h.css';
import '../../css/c/cew7afbxa.css';
import '../../css/p/p4rnwphiw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yssc87bli"/><path class="uxtf7gb4w"/><path class="uogpfrorl"/><path class="cizw5-z8h"/><path class="cew7afbxa"/><path class="p4rnwphiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:kimono"} {...others} />);
}

export default Component;
