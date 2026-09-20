import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3rsxqbbk.css';
import '../../css/s/s8sunfb9g.css';
import '../../css/w/wvk0rh36i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y3rsxqbbk"/><path class="s8sunfb9g"/><path class="wvk0rh36i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:barbecue"} {...others} />);
}

export default Component;
