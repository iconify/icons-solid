import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br0fl3byt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="br0fl3byt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:nodejs"} {...others} />);
}

export default Component;
