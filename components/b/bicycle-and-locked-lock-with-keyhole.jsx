import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl9lvtbbd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sl9lvtbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bicycle-and-locked-lock-with-keyhole"} {...others} />);
}

export default Component;
