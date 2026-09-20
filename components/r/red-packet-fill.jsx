import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da49kcg0i.css';
import '../../css/x/xdwstclco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="da49kcg0i"/><path class="xdwstclco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:red-packet-fill"} {...others} />);
}

export default Component;
