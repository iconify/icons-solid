import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mwal4cbmx.css';
import '../../css/o/oxqh6ebtn.css';
import '../../css/a/a5daoqjdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mwal4cbmx"/><path class="oxqh6ebtn"/><path class="a5daoqjdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-add-bold"} {...others} />);
}

export default Component;
