import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfsw7b0sv.css';
import '../../css/a/alo1w6bul.css';
import '../../css/s/s2jd-4bsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfsw7b0sv"/><path class="alo1w6bul"/><path class="s2jd-4bsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:raiplay"} {...others} />);
}

export default Component;
