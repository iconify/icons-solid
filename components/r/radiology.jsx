import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2x7t-b5p.css';
import '../../css/i/i9nyku57s.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="v2x7t-b5p"/><path class="i9nyku57s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:radiology"} {...others} />);
}

export default Component;
