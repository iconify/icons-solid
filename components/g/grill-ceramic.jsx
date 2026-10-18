import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm7ve_bov.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xm7ve_bov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:grill-ceramic"} {...others} />);
}

export default Component;
