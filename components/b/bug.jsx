import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1jnopb3d.css';
import '../../css/l/l3z28ebpv.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="w1jnopb3d"/><path class="l3z28ebpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bug"} {...others} />);
}

export default Component;
