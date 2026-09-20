import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqns1xbrx.css';
import '../../css/j/jg2gjvb1x.css';
import '../../css/h/h_f3nkuky.css';
import '../../css/b/b2bbneoco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yqns1xbrx"/><path class="jg2gjvb1x"/><path class="h_f3nkuky"/><path class="b2bbneoco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:picture-stack-landscape"} {...others} />);
}

export default Component;
