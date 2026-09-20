import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7kitb.css';
import '../../css/t/t5pxry.css';
import '../../css/q/q5vxhp.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGdXoEbuTb"><path class="j7kitb t5pxry"/><path class="q5vxhp t5pxry"/></mask></defs><path mask="url(#SVGdXoEbuTb)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:file-search-filled"} {...others} />);
}

export default Component;
