import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdtmj-bqy.css';
import '../../css/n/nlvvtjrbk.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vdtmj-bqy"/><path class="nlvvtjrbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:hibernate"} {...others} />);
}

export default Component;
