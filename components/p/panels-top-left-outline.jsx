import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acs2urb_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="acs2urb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-top-left-outline"} {...others} />);
}

export default Component;
