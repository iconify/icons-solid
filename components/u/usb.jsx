import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xaka1xbsw.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/r/r5-oiua1r.css';
import '../../css/a/aa5fno6lk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xaka1xbsw"/><g class="av3m8fbrw"><path class="r5-oiua1r"/><path class="aa5fno6lk"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:usb"} {...others} />);
}

export default Component;
