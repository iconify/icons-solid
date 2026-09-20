import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg9vbachl.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rg9vbachl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:electric-cord-1"} {...others} />);
}

export default Component;
