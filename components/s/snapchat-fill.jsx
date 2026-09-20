import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv0tkkeho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xv0tkkeho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:snapchat-fill"} {...others} />);
}

export default Component;
