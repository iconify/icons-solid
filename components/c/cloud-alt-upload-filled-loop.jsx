import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxsk5z.css';
import '../../css/o/o4bzoz.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-_cmxkd.css';
import '../../css/d/d-23sxtr.css';
import '../../css/d/d-2ce4be.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG01ZtjcLZ"><path class="fxsk5z"/><path class="o4bzoz"/></mask></defs><path mask="url(#SVG01ZtjcLZ)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-upload-filled-loop"} {...others} />);
}

export default Component;
