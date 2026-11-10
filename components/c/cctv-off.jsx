import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uevo5ebgk.css';
import '../../css/i/i5phzmqdh.css';
import '../../css/g/gvrjuabrt.css';
import '../../css/b/bfxfvsb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uevo5ebgk"/><path class="i5phzmqdh"/><path class="gvrjuabrt"/><path class="bfxfvsb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cctv-off"} {...others} />);
}

export default Component;
