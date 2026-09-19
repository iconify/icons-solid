import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4jbpvzyd.css';
import '../../css/t/t6ftoevsq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="c4jbpvzyd"/><path class="t6ftoevsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:pushpin-twotone"} {...others} />);
}

export default Component;
