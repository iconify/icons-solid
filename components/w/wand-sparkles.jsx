import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eahi3-bmn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eahi3-bmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:wand-sparkles"} {...others} />);
}

export default Component;
