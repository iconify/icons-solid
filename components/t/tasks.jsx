import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz9fz5bvf.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="tz9fz5bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:tasks"} {...others} />);
}

export default Component;
