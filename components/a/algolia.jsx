import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmx6jvt0b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cmx6jvt0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:algolia"} {...others} />);
}

export default Component;
