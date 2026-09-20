import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcxm9nb7g.css';
import '../../css/o/o-c62h2ob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcxm9nb7g"/><path class="o-c62h2ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-location-filled"} {...others} />);
}

export default Component;
