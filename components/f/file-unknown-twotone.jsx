import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1h2ywb3p.css';
import '../../css/z/z4pv5t1oe.css';
import '../../css/u/ub1afpn4a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="r1h2ywb3p"/><path class="z4pv5t1oe"/><path class="ub1afpn4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-unknown-twotone"} {...others} />);
}

export default Component;
