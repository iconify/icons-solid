import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3u4i43bc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3u4i43bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:info-diamond-solid"} {...others} />);
}

export default Component;
