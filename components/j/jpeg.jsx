import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwnv1o_vp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwnv1o_vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:jpeg"} {...others} />);
}

export default Component;
