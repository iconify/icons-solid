import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opjpgxw-l.css';
import '../../css/l/liah705zk.css';
import '../../css/q/q9__elwgx.css';
import '../../css/q/q31a-k5ne.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="opjpgxw-l"/><path class="liah705zk"/><path class="q9__elwgx"/><path class="q31a-k5ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:container-twotone"} {...others} />);
}

export default Component;
