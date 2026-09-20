import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv4hdlb2t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zv4hdlb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:emulatorjs-light"} {...others} />);
}

export default Component;
