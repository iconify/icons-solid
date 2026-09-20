import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2z-9u.css';
import '../../css/i/iw1iew.css';
import '../../css/y/ydovum.css';
import '../../css/i/ik5ydf.css';
import '../../css/o/o71y-l.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-fwg6_w.css';
import '../../css/d/d-7yzihk.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d2z-9u iw1iew ydovum"/><path class="ik5ydf ydovum"/><path class="iw1iew o71y-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:monitor-filled"} {...others} />);
}

export default Component;
