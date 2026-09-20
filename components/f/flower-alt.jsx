import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8msorzgx.css';
import '../../css/w/wpiedsuzc.css';
import '../../css/p/p725vzbaj.css';
import '../../css/z/zf0l2oqao.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p8msorzgx"/><path clip-rule="evenodd" class="wpiedsuzc"/><path class="p725vzbaj"/><path class="zf0l2oqao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:flower-alt"} {...others} />);
}

export default Component;
