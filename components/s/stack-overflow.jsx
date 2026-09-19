import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg6puob4f.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="fg6puob4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:stack-overflow"} {...others} />);
}

export default Component;
