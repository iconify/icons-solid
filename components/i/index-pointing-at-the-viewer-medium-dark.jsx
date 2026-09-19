import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3_djrgrp.css';
import '../../css/j/j6lpvdbmc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="e3_djrgrp"/><path class="j6lpvdbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:index-pointing-at-the-viewer-medium-dark"} {...others} />);
}

export default Component;
