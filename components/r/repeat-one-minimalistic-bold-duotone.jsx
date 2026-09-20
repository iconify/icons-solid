import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iz7pr1buf.css';
import '../../css/e/evitbbbdh.css';
import '../../css/w/wq_plobpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iz7pr1buf"/><path clip-rule="evenodd" class="evitbbbdh"/><path class="wq_plobpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:repeat-one-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
