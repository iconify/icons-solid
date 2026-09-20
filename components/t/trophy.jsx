import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_q6zofxi.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-2};
const content = `<path class="z_q6zofxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:trophy"} {...others} />);
}

export default Component;
