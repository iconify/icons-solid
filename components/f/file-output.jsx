import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n116j5v7v.css';
import '../../css/g/g2ncgwkcx.css';
import '../../css/d/dpfql9v-g.css';
import '../../css/k/k515a3n2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n116j5v7v"/><path class="g2ncgwkcx"/><path class="dpfql9v-g"/><path class="k515a3n2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-output"} {...others} />);
}

export default Component;
