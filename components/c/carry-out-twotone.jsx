import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuk6t8bzw.css';
import '../../css/n/nxma1vbuk.css';
import '../../css/x/xaosrk3sy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="kuk6t8bzw"/><path class="nxma1vbuk"/><path class="xaosrk3sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:carry-out-twotone"} {...others} />);
}

export default Component;
