import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7kitb.css';
import '../../css/t/t5pxry.css';
import '../../css/t/t_-v8q.css';
import '../../css/b/botfzx.css';
import '../../css/v/vsa9dz.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG6ov8qcWV"><path class="j7kitb t5pxry"/><path class="t5pxry t_-v8q"/></mask></defs><path mask="url(#SVG6ov8qcWV)" class="botfzx"/><path class="t5pxry vsa9dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:file-filled"} {...others} />);
}

export default Component;
