import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zl-i7yb9j.css';
import '../../css/r/r2ernklhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zl-i7yb9j"/><path class="r2ernklhv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:close"} {...others} />);
}

export default Component;
