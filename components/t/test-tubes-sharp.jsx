import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsm1_jstp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xsm1_jstp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tubes-sharp"} {...others} />);
}

export default Component;
