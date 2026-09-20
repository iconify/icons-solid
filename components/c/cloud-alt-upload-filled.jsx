import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrlnzc.css';
import '../../css/c/ciufjk.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-_cmxkd.css';
import '../../css/d/d-23sxtr.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGxd71Ichr"><path class="jrlnzc"/><path class="ciufjk"/></mask></defs><path mask="url(#SVGxd71Ichr)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-upload-filled"} {...others} />);
}

export default Component;
