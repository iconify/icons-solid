import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjui_cb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wjui_cb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:calendar-edit-1-bold"} {...others} />);
}

export default Component;
