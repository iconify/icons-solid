import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4h4ye05q.css';
import '../../css/t/tvl9klbvu.css';
import '../../css/z/zyl8ekbyh.css';
import '../../css/u/uzq0y0bqj.css';
import '../../css/j/jflafench.css';
import '../../css/c/cjq4bibfp.css';
import '../../css/l/l6mboycqo.css';
import '../../css/r/r_9j9bc6q.css';
import '../../css/p/p1t_xdsgq.css';
import '../../css/t/t66wso8uu.css';
import '../../css/h/hbf4nh5rj.css';
import '../../css/f/fysfwpb7i.css';
import '../../css/q/qowov5brb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x4h4ye05q"/><path class="tvl9klbvu"/><path class="zyl8ekbyh"/><path class="uzq0y0bqj"/><path class="jflafench"/><path class="cjq4bibfp"/><path class="l6mboycqo"/><path class="r_9j9bc6q"/><path class="p1t_xdsgq"/><path class="t66wso8uu"/><path class="hbf4nh5rj"/><path class="fysfwpb7i"/><path class="qowov5brb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:woman-wearing-turban-medium"} {...others} />);
}

export default Component;
