import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qf2fswnqp.css';
import '../../css/k/kgjprcbqg.css';
import '../../css/a/aj4cwjb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qf2fswnqp"/><path class="kgjprcbqg"/><path class="aj4cwjb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pen-tool-03"} {...others} />);
}

export default Component;
