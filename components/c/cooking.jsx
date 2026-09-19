import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj4jvvb4s.css';
import '../../css/x/x1nycob9q.css';
import '../../css/r/roswzac8u.css';
import '../../css/z/zk4-s8b2o.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hj4jvvb4s"/><path class="x1nycob9q"/><path class="roswzac8u"/><path class="zk4-s8b2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cooking"} {...others} />);
}

export default Component;
