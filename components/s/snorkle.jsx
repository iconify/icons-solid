import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts2mgqkxa.css';
import '../../css/w/w9t2-kb7r.css';
import '../../css/l/lr31_5_hh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ts2mgqkxa"/><path class="w9t2-kb7r"/><path class="lr31_5_hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:snorkle"} {...others} />);
}

export default Component;
