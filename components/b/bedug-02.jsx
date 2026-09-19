import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/eoqs9jb2q.css';
import '../../css/r/rkgmofbxf.css';
import '../../css/b/byfvflb4v.css';
import '../../css/f/f3f7r-b4l.css';
import '../../css/d/dzta_nc4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="eoqs9jb2q"/><path class="rkgmofbxf"/><path class="byfvflb4v"/><path class="f3f7r-b4l"/><path class="dzta_nc4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bedug-02"} {...others} />);
}

export default Component;
