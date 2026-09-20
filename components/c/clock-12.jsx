import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxlq8b69v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxlq8b69v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:clock-12"} {...others} />);
}

export default Component;
