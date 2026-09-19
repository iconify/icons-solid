import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8xwu9g6i.css';
import '../../css/g/gxciwdbjh.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="s8xwu9g6i"/><path class="gxciwdbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:phone-portrait-outline"} {...others} />);
}

export default Component;
