import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywf99jxpj.css';
import '../../css/w/wxokuur_c.css';
import '../../css/n/nx7jdrbes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ywf99jxpj"/><path clip-rule="evenodd" class="wxokuur_c"/><path class="nx7jdrbes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:container-bold"} {...others} />);
}

export default Component;
