import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/croq3fn1k.css';
import '../../css/n/ntnrn0bpj.css';
import '../../css/i/ii7t1pbxw.css';
import '../../css/p/p5xfbj8dj.css';
import '../../css/q/q633jr3gp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="croq3fn1k"/><path class="ntnrn0bpj"/><path class="ii7t1pbxw"/><path class="p5xfbj8dj"/><path class="q633jr3gp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:popcorn"} {...others} />);
}

export default Component;
