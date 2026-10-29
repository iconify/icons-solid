import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/se5m48bap.css';
import '../../css/t/tpjg30w-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="se5m48bap"/><path class="tpjg30w-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drag-handle-engrave"} {...others} />);
}

export default Component;
