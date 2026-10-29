import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jdokwnbqk.css';
import '../../css/b/bymrjbwvt.css';
import '../../css/w/wp8eyggrp.css';
import '../../css/b/ba_pjzfdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jdokwnbqk"/><path class="bymrjbwvt wm-a"/><path class="wp8eyggrp"/><path class="ba_pjzfdu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:school"} {...others} />);
}

export default Component;
