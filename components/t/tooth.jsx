import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mti05vejb.css';
import '../../css/q/qxq52ip6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mti05vejb"/><path class="qxq52ip6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tooth"} {...others} />);
}

export default Component;
