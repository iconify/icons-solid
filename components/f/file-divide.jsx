import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc12f6b-x.css';
import '../../css/d/d2cm7jb3w.css';
import '../../css/y/yg4a90bou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pc12f6b-x"/><path class="d2cm7jb3w"/><path class="yg4a90bou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-divide"} {...others} />);
}

export default Component;
