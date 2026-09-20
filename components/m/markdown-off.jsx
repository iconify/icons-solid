import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zr1l_kl2t.css';
import '../../css/j/j5ink7pxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zr1l_kl2t"/><path class="j5ink7pxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:markdown-off"} {...others} />);
}

export default Component;
