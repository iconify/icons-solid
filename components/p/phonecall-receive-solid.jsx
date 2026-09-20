import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxacudx8p.css';
import '../../css/s/s4p2gkl9u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pxacudx8p"/><path class="s4p2gkl9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:phonecall-receive-solid"} {...others} />);
}

export default Component;
