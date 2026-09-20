import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb75td1fd.css';
import '../../css/v/vgbkvw-3y.css';
import '../../css/a/a72965b4n.css';
import '../../css/u/uxsm2wbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jb75td1fd"/><path class="vgbkvw-3y"/><path class="a72965b4n"/><path class="uxsm2wbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-youtube"} {...others} />);
}

export default Component;
