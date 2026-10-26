import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i77f6iezr.css';
import '../../css/d/ddg2v8bix.css';
import '../../css/v/v0i5h5b5f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="i77f6iezr"/><path clip-rule="evenodd" class="ddg2v8bix"/><path class="v0i5h5b5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:heat-therapy-outline"} {...others} />);
}

export default Component;
