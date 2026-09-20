import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn5qy_bau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dn5qy_bau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:mouse-right-click-outline"} {...others} />);
}

export default Component;
