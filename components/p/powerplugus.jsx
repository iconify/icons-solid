import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw4js04xx.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="yw4js04xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:powerplugus"} {...others} />);
}

export default Component;
