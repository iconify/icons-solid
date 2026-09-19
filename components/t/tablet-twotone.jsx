import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q712rm2xz.css';
import '../../css/a/aw76ujlyo.css';
import '../../css/w/w68m2kb4h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="q712rm2xz"/><path class="aw76ujlyo"/><path class="w68m2kb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:tablet-twotone"} {...others} />);
}

export default Component;
