import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh7z4ubgx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nh7z4ubgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:chip-bag"} {...others} />);
}

export default Component;
