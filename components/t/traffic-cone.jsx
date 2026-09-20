import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm3s18ekn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gm3s18ekn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:traffic-cone"} {...others} />);
}

export default Component;
