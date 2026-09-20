import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csyj8wbif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="csyj8wbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:email-outlined"} {...others} />);
}

export default Component;
