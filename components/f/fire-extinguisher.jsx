import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrpor5pjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrpor5pjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:fire-extinguisher"} {...others} />);
}

export default Component;
