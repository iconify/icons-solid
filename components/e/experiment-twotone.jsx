import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odtla-seg.css';
import '../../css/n/ns3hbpbni.css';
import '../../css/p/ppyfuefwr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="odtla-seg"/><path class="ns3hbpbni"/><path class="ppyfuefwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:experiment-twotone"} {...others} />);
}

export default Component;
