import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f8le2jbey.css';
import '../../css/o/ol5--vb1y.css';
import '../../css/t/t10685b9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f8le2jbey"/><path clip-rule="evenodd" class="ol5--vb1y"/><path class="t10685b9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:image-plus"} {...others} />);
}

export default Component;
