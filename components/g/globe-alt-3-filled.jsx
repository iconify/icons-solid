import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyfwd4byf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xyfwd4byf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:globe-alt-3-filled"} {...others} />);
}

export default Component;
