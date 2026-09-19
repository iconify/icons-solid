import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g75be7uzv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g75be7uzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-engineering-systems-design-rhapsody-sn1"} {...others} />);
}

export default Component;
