import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_4s_ccvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_4s_ccvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:mouse-move-vertical"} {...others} />);
}

export default Component;
