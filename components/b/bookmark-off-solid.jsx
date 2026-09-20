import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk_wx9b5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rk_wx9b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:bookmark-off-solid"} {...others} />);
}

export default Component;
