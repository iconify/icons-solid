import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkhgl2hds.css';
import '../../css/o/oq84hwbhk.css';
import '../../css/z/zf7i_pble.css';
import '../../css/d/de4mhowcm.css';
import '../../css/q/qyonjyb0a.css';
import '../../css/m/mvuytg6-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bkhgl2hds"/><path class="oq84hwbhk"/><path class="zf7i_pble"/><path class="de4mhowcm"/><path class="qyonjyb0a"/><path class="mvuytg6-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:common-file-upload"} {...others} />);
}

export default Component;
