import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2hs_cbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h2hs_cbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:phone-missed"} {...others} />);
}

export default Component;
