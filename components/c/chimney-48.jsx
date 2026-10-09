import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwcuq_bqp.css';
import '../../css/y/yb3rr1f2s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bwcuq_bqp"/><path class="yb3rr1f2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chimney-48"} {...others} />);
}

export default Component;
