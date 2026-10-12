import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z979mogjo.css';
import '../../css/f/fs2f81bzt.css';
import '../../css/n/ngbribb0z.css';
import '../../css/r/rvgip8e_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z979mogjo"/><path class="fs2f81bzt"/><path class="ngbribb0z"/><path class="rvgip8e_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-orientation"} {...others} />);
}

export default Component;
