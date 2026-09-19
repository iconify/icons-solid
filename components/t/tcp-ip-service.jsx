import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntr9l2cws.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ntr9l2cws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tcp-ip-service"} {...others} />);
}

export default Component;
