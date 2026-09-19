import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3i704izb.css';
import '../../css/r/rypnjzb0p.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="l3i704izb"/><path class="rypnjzb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:highlight-twotone"} {...others} />);
}

export default Component;
