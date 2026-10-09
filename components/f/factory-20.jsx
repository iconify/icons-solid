import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymsepxb1r.css';
import '../../css/j/jzqnmq_ec.css';
import '../../css/p/p2m8mnb8n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ymsepxb1r"/><path class="jzqnmq_ec"/><path class="p2m8mnb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:factory-20"} {...others} />);
}

export default Component;
