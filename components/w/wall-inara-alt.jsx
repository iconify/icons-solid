import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx6u9sb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx6u9sb_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:wall-inara-alt"} {...others} />);
}

export default Component;
