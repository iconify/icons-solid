import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/seti68b8j.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};
const content = `<path class="seti68b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:battery-charging"} {...others} />);
}

export default Component;
