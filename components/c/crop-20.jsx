import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d938krbry.css';
import '../../css/e/eid02wl-j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d938krbry"/><path class="eid02wl-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crop-20"} {...others} />);
}

export default Component;
