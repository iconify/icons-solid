import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm3xmebmn.css';
import '../../css/x/x6zdh-elq.css';
import '../../css/k/kghrh9bow.css';
import '../../css/w/wjl1hub3r.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qm3xmebmn"/><path class="x6zdh-elq"/><path class="kghrh9bow"/><path class="wjl1hub3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:security-scan-twotone"} {...others} />);
}

export default Component;
