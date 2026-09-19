import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtqi52c4n.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="rtqi52c4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:mail-bulk"} {...others} />);
}

export default Component;
