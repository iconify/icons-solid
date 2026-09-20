import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jypf_8bzn.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};
const content = `<path class="jypf_8bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:fork"} {...others} />);
}

export default Component;
