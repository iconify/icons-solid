import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo2ri5m8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jo2ri5m8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:tether-usdt-fill"} {...others} />);
}

export default Component;
