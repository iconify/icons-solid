import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij8caccud.css';
import '../../css/p/p05vswb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ij8caccud"/><path class="p05vswb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:codescan-24"} {...others} />);
}

export default Component;
