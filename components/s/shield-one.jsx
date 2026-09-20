import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xohs8_ozi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xohs8_ozi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:shield-one"} {...others} />);
}

export default Component;
