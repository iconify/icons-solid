import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4kgap47f.css';
import '../../css/k/ka8w_gbvw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="p4kgap47f"/><path clip-rule="evenodd" class="ka8w_gbvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-bold"} {...others} />);
}

export default Component;
