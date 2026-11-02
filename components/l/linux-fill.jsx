import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzqd4p8cr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzqd4p8cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:linux-fill"} {...others} />);
}

export default Component;
