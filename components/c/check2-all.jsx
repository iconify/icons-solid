import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aro-8uk-y.css';
import '../../css/z/zel2m4bof.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="aro-8uk-y"/><path class="zel2m4bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:check2-all"} {...others} />);
}

export default Component;
