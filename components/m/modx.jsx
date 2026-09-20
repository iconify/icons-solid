import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv4b9k1_p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hv4b9k1_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:modx"} {...others} />);
}

export default Component;
