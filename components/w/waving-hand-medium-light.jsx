import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bn0vpjs_i.css';
import '../../css/a/a4itpjaex.css';
import '../../css/f/fqszj8b9d.css';
import '../../css/m/mhelj70um.css';
import '../../css/i/i0xj7gb-f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bn0vpjs_i"/><path class="a4itpjaex"/><path class="fqszj8b9d"/><path class="mhelj70um"/><path class="i0xj7gb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:waving-hand-medium-light"} {...others} />);
}

export default Component;
