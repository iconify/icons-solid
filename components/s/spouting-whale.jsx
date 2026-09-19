import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5gsj3gje.css';
import '../../css/f/fij16-bho.css';
import '../../css/f/fq5_rrn4l.css';
import '../../css/w/w25rgrb9f.css';
import '../../css/h/ho7fkytbn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="z5gsj3gje"/><path class="fij16-bho"/><path class="fq5_rrn4l"/><path class="w25rgrb9f"/><path class="ho7fkytbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:spouting-whale"} {...others} />);
}

export default Component;
