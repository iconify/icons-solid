import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2kxj3bar.css';
import '../../css/q/q9pd582ie.css';
import '../../css/c/cwqzxbcxy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="a2kxj3bar"/><path class="q9pd582ie"/><path class="cwqzxbcxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sun-with-face"} {...others} />);
}

export default Component;
