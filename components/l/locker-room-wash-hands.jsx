import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hjgg_8bwx.css';
import '../../css/u/ucevwil0r.css';
import '../../css/f/ft2_tf_mg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hjgg_8bwx"/><path class="ucevwil0r"/><path class="ft2_tf_mg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:locker-room-wash-hands"} {...others} />);
}

export default Component;
