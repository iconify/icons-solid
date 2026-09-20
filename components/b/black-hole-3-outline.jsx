import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocx9c_b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ocx9c_b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-3-outline"} {...others} />);
}

export default Component;
