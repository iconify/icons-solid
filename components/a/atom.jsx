import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh1l9-vtp.css';

const viewBox = {"width":898,"height":1024};
const content = `<path class="dh1l9-vtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:atom"} {...others} />);
}

export default Component;
