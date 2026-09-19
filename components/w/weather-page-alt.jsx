import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmo1cxy0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xmo1cxy0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:weather-page-alt"} {...others} />);
}

export default Component;
