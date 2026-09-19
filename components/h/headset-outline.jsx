import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymicfbb2j.css';
import '../../css/r/rhba1dbhi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ymicfbb2j"/><path class="rhba1dbhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:headset-outline"} {...others} />);
}

export default Component;
