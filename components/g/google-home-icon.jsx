import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv3re6wbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv3re6wbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:google-home-icon"} {...others} />);
}

export default Component;
