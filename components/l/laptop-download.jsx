import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjy7d2blr.css';
import '../../css/i/igpjcgb8h.css';
import '../../css/u/us-nefa0b.css';
import '../../css/t/tm99d8cqc.css';
import '../../css/y/ywjoq4tet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wjy7d2blr"/><path class="igpjcgb8h"/><path class="us-nefa0b"/><path class="tm99d8cqc"/><path class="ywjoq4tet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:laptop-download"} {...others} />);
}

export default Component;
