import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x6vm-8qvv.css';
import '../../css/q/qna-m1b4k.css';
import '../../css/u/ucg8mrbfd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="x6vm-8qvv"/><path class="qna-m1b4k"/><path class="ucg8mrbfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pull-requests"} {...others} />);
}

export default Component;
