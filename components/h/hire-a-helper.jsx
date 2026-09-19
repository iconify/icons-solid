import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uel6f8b4j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uel6f8b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:hire-a-helper"} {...others} />);
}

export default Component;
