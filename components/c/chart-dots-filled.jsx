import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bx68l1boo.css';
import '../../css/x/xx79rpr8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bx68l1boo"/><path class="xx79rpr8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-dots-filled"} {...others} />);
}

export default Component;
