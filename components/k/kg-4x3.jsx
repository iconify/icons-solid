import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glbu6gb9k.css';
import '../../css/x/x-vljeb0p.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="glbu6gb9k"/><path class="x-vljeb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:kg-4x3"} {...others} />);
}

export default Component;
