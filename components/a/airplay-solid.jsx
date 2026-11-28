import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf_7o0bms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lf_7o0bms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:airplay-solid"} {...others} />);
}

export default Component;
