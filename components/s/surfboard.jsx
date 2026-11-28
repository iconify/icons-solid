import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/km5i-ppez.css';
import '../../css/h/hy-9zt58a.css';
import '../../css/h/hssgctbcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="km5i-ppez"/><path class="hy-9zt58a"/><path class="hssgctbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:surfboard"} {...others} />);
}

export default Component;
