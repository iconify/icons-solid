import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhv2lljao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yhv2lljao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:video-cinema-filled"} {...others} />);
}

export default Component;
