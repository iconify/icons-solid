import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aedlki8zz.css';
import '../../css/h/hgfppsdxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="aedlki8zz"/><path clip-rule="evenodd" class="hgfppsdxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:crosshairs-filled"} {...others} />);
}

export default Component;
