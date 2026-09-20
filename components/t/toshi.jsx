import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_uqzkbxl.css';
import '../../css/d/dmbs_cc9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_uqzkbxl"/><path class="dmbs_cc9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:toshi"} {...others} />);
}

export default Component;
