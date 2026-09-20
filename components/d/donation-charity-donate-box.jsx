import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tchp8klhx.css';
import '../../css/m/muu4_m-df.css';
import '../../css/r/rf6ucnbyo.css';
import '../../css/e/e4-53qbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tchp8klhx"/><path class="muu4_m-df"/><path class="rf6ucnbyo"/><path class="e4-53qbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:donation-charity-donate-box"} {...others} />);
}

export default Component;
