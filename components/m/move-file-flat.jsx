import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0hug8bsy.css';
import '../../css/w/w1ohp4baa.css';
import '../../css/m/msyv18brm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g0hug8bsy"/><path class="w1ohp4baa"/><path clip-rule="evenodd" class="msyv18brm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:move-file-flat"} {...others} />);
}

export default Component;
