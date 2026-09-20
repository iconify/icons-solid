import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf_h8hs5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gf_h8hs5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:heading-6-sharp"} {...others} />);
}

export default Component;
