import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u4y7i2bog.css';
import '../../css/z/z74xy-b0z.css';
import '../../css/e/ej9s_0bwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u4y7i2bog"/><path class="z74xy-b0z"/><path class="ej9s_0bwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:advertising-ad-browser"} {...others} />);
}

export default Component;
