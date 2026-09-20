import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmo45hhmm.css';
import '../../css/h/hb4vkiz6b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tmo45hhmm"/><path class="hb4vkiz6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:cloud-up-16"} {...others} />);
}

export default Component;
