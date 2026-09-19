import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z28xwebbi.css';
import '../../css/h/hk-49hb0i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="z28xwebbi"/><path class="hk-49hb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-richtext"} {...others} />);
}

export default Component;
