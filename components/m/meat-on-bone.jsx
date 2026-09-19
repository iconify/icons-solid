import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sobp7ui6c.css';
import '../../css/q/q6antebxy.css';
import '../../css/y/yp73vgbag.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="sobp7ui6c"/><path class="q6antebxy"/><path class="yp73vgbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:meat-on-bone"} {...others} />);
}

export default Component;
