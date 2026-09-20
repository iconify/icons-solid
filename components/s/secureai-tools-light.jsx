import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfg2xib9d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pfg2xib9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:secureai-tools-light"} {...others} />);
}

export default Component;
