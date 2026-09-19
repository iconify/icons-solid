import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eunmtixue.css';
import '../../css/g/gk_-emhjw.css';
import '../../css/b/b3q787b0f.css';
import '../../css/y/ydxqe_b6b.css';
import '../../css/s/sidw-zgtc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="eunmtixue"/><path class="gk_-emhjw"/><path class="b3q787b0f"/><path class="ydxqe_b6b"/><path class="sidw-zgtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:waffle"} {...others} />);
}

export default Component;
