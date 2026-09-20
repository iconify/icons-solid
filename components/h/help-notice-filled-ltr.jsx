import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2b68bbvm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j2b68bbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:help-notice-filled-ltr"} {...others} />);
}

export default Component;
