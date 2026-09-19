import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe24ebbhp.css';
import '../../css/w/wr13vpbrq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="oe24ebbhp"/><path class="wr13vpbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:heart-twotone"} {...others} />);
}

export default Component;
