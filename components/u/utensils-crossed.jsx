import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vmolxdb4q.css';
import '../../css/l/lnqcukl8z.css';
import '../../css/y/y29_0ek2z.css';
import '../../css/c/c8h1ppbad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vmolxdb4q wm-k"/><path class="lnqcukl8z wm-a"/><path class="y29_0ek2z"/><path class="c8h1ppbad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:utensils-crossed"} {...others} />);
}

export default Component;
