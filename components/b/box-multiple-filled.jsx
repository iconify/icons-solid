import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v__a3647e.css';
import '../../css/x/x-19_rbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v__a3647e"/><path class="x-19_rbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:box-multiple-filled"} {...others} />);
}

export default Component;
