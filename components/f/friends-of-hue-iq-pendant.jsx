import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6g0efk1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6g0efk1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:friends-of-hue-iq-pendant"} {...others} />);
}

export default Component;
