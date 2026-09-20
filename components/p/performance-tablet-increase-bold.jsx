import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgdd18btl.css';
import '../../css/y/y2ci2rbgk.css';
import '../../css/p/pkw90xu3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bgdd18btl"/><path class="y2ci2rbgk"/><path class="pkw90xu3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:performance-tablet-increase-bold"} {...others} />);
}

export default Component;
