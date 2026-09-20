import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl_gb3b1a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vl_gb3b1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:user-shield"} {...others} />);
}

export default Component;
