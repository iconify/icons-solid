import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wztm61yks.css';
import '../../css/x/xfuq7vbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wztm61yks"/><path class="xfuq7vbuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:railway"} {...others} />);
}

export default Component;
