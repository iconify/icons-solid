import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4erq1bzb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e4erq1bzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:male-female-sharp"} {...others} />);
}

export default Component;
