import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk5u0i5pv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zk5u0i5pv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:ranger-station"} {...others} />);
}

export default Component;
