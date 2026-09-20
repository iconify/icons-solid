import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wumap5bqq.css';
import '../../css/j/j246-ubvw.css';
import '../../css/p/pmwq_pb3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wumap5bqq"/><path clip-rule="evenodd" class="j246-ubvw"/><path class="pmwq_pb3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:battery-full2"} {...others} />);
}

export default Component;
