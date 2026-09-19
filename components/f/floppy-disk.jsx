import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_0_lnbrr.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="w_0_lnbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:floppy-disk"} {...others} />);
}

export default Component;
