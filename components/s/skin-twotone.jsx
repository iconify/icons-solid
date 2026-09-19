import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm5rxtu_s.css';
import '../../css/y/yqxcomdtf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lm5rxtu_s"/><path class="yqxcomdtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:skin-twotone"} {...others} />);
}

export default Component;
