import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/ca803xiyh.css';
import '../../css/l/lptgplb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ca803xiyh"/><path class="lptgplb-t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:command"} {...others} />);
}

export default Component;
