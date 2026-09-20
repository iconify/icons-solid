import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r4b2gwbvq.css';
import '../../css/p/p3w2d7x_w.css';
import '../../css/g/geahrbbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r4b2gwbvq"/><path class="p3w2d7x_w"/><path class="geahrbbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cables-split"} {...others} />);
}

export default Component;
