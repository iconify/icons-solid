import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms-ka6b2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ms-ka6b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:user-sparkle-corner-fill-round"} {...others} />);
}

export default Component;
