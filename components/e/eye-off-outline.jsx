import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqg5a0bzs.css';
import '../../css/d/dzfumybez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqg5a0bzs"/><path class="dzfumybez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:eye-off-outline"} {...others} />);
}

export default Component;
