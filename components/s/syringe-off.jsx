import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjq_smbpx.css';
import '../../css/q/qk1oudndu.css';
import '../../css/n/nbkmm9bhe.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jjq_smbpx"/><path class="qk1oudndu"/><path class="nbkmm9bhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:syringe-off"} {...others} />);
}

export default Component;
