import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg-731b9u.css';
import '../../css/p/pxacudx8p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fg-731b9u"/><path class="pxacudx8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:phonecall-solid"} {...others} />);
}

export default Component;
