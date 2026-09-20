import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zobiihb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zobiihb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-outline"} {...others} />);
}

export default Component;
