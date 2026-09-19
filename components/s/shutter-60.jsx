import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxw8ynnbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxw8ynnbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:shutter-60"} {...others} />);
}

export default Component;
