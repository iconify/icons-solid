import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygs_qq5iv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ygs_qq5iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:water-drop-slash"} {...others} />);
}

export default Component;
