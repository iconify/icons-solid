import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj0mwubcb.css';
import '../../css/q/qm3xmebmn.css';
import '../../css/s/s-rrjubfy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="oj0mwubcb"/><path class="qm3xmebmn"/><path class="s-rrjubfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:verified"} {...others} />);
}

export default Component;
