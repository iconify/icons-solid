import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hagmcibar.css';
import '../../css/l/ltxzfluea.css';
import '../../css/y/y8k8fzq5c.css';
import '../../css/v/vu_lpmb5d.css';
import '../../css/q/ql3pvabdr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hagmcibar"/><path class="ltxzfluea"/><path class="y8k8fzq5c"/><path class="vu_lpmb5d"/><path class="ql3pvabdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:credit-card"} {...others} />);
}

export default Component;
