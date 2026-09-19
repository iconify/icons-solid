import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzedyzb9o.css';
import '../../css/o/o2d3vabmu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kzedyzb9o"/><path class="o2d3vabmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:description"} {...others} />);
}

export default Component;
