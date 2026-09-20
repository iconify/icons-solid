import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jmr6qdb5q.css';
import '../../css/o/o0i-ddfqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jmr6qdb5q"/><path class="o0i-ddfqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:nodes"} {...others} />);
}

export default Component;
