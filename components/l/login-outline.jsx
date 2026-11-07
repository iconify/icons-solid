import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfi9t8bxj.css';
import '../../css/z/zw-inltah.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfi9t8bxj"/><path class="zw-inltah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:login-outline"} {...others} />);
}

export default Component;
