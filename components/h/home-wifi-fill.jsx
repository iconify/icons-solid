import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bp4s1-v3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bp4s1-v3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:home-wifi-fill"} {...others} />);
}

export default Component;
