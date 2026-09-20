import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvm7w0qkw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvm7w0qkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:soundcloud-fill"} {...others} />);
}

export default Component;
