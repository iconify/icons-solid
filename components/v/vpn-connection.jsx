import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of1ohj7_a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="of1ohj7_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:vpn-connection"} {...others} />);
}

export default Component;
