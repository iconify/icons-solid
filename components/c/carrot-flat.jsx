import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m01h-7bqz.css';
import '../../css/v/vi-x_zbct.css';
import '../../css/w/w-elgk49c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m01h-7bqz"/><path class="vi-x_zbct"/><path clip-rule="evenodd" class="w-elgk49c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:carrot-flat"} {...others} />);
}

export default Component;
