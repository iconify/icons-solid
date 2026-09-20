import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4i2ew1ke.css';
import '../../css/i/im-u8ub-i.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="v4i2ew1ke"/><path clip-rule="evenodd" class="im-u8ub-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:gps-fixed-duotone"} {...others} />);
}

export default Component;
