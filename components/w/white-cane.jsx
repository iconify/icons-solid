import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6k6_gbzy.css';
import '../../css/b/bfcww6shf.css';
import '../../css/g/gum7n2-0r.css';
import '../../css/c/ch2zrrr6x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="m6k6_gbzy"/><path class="bfcww6shf"/><path class="gum7n2-0r"/><path class="ch2zrrr6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:white-cane"} {...others} />);
}

export default Component;
