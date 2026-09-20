import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gx3-ulb5j.css';
import '../../css/z/z20-tsb2r.css';
import '../../css/l/l9ep8wyys.css';
import '../../css/q/qtdy2f5jc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gx3-ulb5j"/><path class="z20-tsb2r"/><path class="l9ep8wyys"/><path class="qtdy2f5jc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wifi-laptop"} {...others} />);
}

export default Component;
