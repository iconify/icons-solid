import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlv-olo2n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xlv-olo2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:sparkfun"} {...others} />);
}

export default Component;
