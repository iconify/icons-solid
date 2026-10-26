import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jo5fttb-r.css';
import '../../css/a/amotr2b_o.css';
import '../../css/v/vaxyosbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jo5fttb-r"/><path clip-rule="evenodd" class="amotr2b_o"/><path class="vaxyosbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:heat-therapy-outline-24px"} {...others} />);
}

export default Component;
