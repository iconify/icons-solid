import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyemvd5bc.css';
import '../../css/v/vg0td9b8b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jyemvd5bc"/><path class="vg0td9b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:eonvelope-light"} {...others} />);
}

export default Component;
