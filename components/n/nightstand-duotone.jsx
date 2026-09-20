import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/un5eawvbo.css';
import '../../css/r/rd0ahsbfx.css';
import '../../css/c/cig-abbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="un5eawvbo"/><path class="rd0ahsbfx"/><path clip-rule="evenodd" class="cig-abbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:nightstand-duotone"} {...others} />);
}

export default Component;
