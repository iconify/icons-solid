import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am0pdubzm.css';

const viewBox = {"width":1792,"height":1760};
const content = `<path class="am0pdubzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:firefox"} {...others} />);
}

export default Component;
