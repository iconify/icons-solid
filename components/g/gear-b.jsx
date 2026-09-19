import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vva8lq2qc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vva8lq2qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:gear-b"} {...others} />);
}

export default Component;
