import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws4ta_bbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ws4ta_bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:layout-panel-left-solid"} {...others} />);
}

export default Component;
