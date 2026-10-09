import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg0v5rbgp.css';
import '../../css/w/wj1xj8bpq.css';
import '../../css/l/lu2e92trj.css';
import '../../css/b/b-sd-zboo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vg0v5rbgp"/><path class="wj1xj8bpq"/><path class="lu2e92trj"/><path class="b-sd-zboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:anchor-20-bold"} {...others} />);
}

export default Component;
