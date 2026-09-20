import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5aa83b0x.css';
import '../../css/i/ivbnd-b6o.css';
import '../../css/j/jmwkcabyu.css';
import '../../css/c/c1dl4-sym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o5aa83b0x"/><path class="ivbnd-b6o"/><path class="jmwkcabyu"/><path class="c1dl4-sym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:analytics-graph-line-triple"} {...others} />);
}

export default Component;
