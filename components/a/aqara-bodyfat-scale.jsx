import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifmsnwx2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifmsnwx2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:aqara-bodyfat-scale"} {...others} />);
}

export default Component;
