import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fqkjurbuw.css';
import '../../css/s/sgwrsi3nu.css';
import '../../css/h/hqm-_jb2t.css';
import '../../css/a/aoangbcdl.css';
import '../../css/y/ydt219i9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fqkjurbuw wm-shadow"/><path class="sgwrsi3nu"/><path class="hqm-_jb2t"/><path class="aoangbcdl"/><path class="ydt219i9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-unicorn"} {...others} />);
}

export default Component;
