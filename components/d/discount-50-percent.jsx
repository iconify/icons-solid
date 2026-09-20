import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hbl_i6buq.css';
import '../../css/q/q8ea5g2bk.css';
import '../../css/e/ei4x3rbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hbl_i6buq"/><path class="q8ea5g2bk"/><path class="ei4x3rbqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:discount-50-percent"} {...others} />);
}

export default Component;
