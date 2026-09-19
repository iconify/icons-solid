import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwq5s_bsx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwq5s_bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:pool-electric-lvl"} {...others} />);
}

export default Component;
