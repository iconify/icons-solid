import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jeo1kfb-t.css';
import '../../css/c/ccsoahs3k.css';
import '../../css/u/u7mhlfb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jeo1kfb-t wm-k"/><path class="ccsoahs3k wm-a"/><path class="u7mhlfb0o wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:superscript"} {...others} />);
}

export default Component;
