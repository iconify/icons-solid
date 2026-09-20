import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn765ki5q.css';
import '../../css/y/yz2v9sbep.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="tn765ki5q"/><path class="yz2v9sbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:remove-1w"} {...others} />);
}

export default Component;
