import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/scj6e7j8j.css';
import '../../css/o/obezgrllk.css';
import '../../css/z/zs0uyebvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="scj6e7j8j"/><path class="obezgrllk"/><path clip-rule="evenodd" class="zs0uyebvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:enzyme-outline-24px"} {...others} />);
}

export default Component;
