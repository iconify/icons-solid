import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5pl0o2ym.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n5pl0o2ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:mixcloud"} {...others} />);
}

export default Component;
