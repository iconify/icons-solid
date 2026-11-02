import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec4st_xys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ec4st_xys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ethernet-port-fill"} {...others} />);
}

export default Component;
