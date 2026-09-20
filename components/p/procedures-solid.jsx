import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt-xabb5x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zt-xabb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:procedures-solid"} {...others} />);
}

export default Component;
