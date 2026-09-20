import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sxrostbfo.css';
import '../../css/z/zaofyzbua.css';
import '../../css/o/o59_txsws.css';
import '../../css/l/li5vjfsfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sxrostbfo"/><path class="zaofyzbua"/><path class="o59_txsws"/><path clip-rule="evenodd" class="li5vjfsfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-full-outline"} {...others} />);
}

export default Component;
