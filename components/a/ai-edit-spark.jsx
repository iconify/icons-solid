import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmt79bmyh.css';
import '../../css/x/xgbdvpp9y.css';
import '../../css/j/jq7-x9bnn.css';
import '../../css/g/g7z4pzhpl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cmt79bmyh"/><path class="xgbdvpp9y"/><path class="jq7-x9bnn"/><path class="g7z4pzhpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-edit-spark"} {...others} />);
}

export default Component;
