import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/m/mytomn.css';
import '../../css/l/lotvgl.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-vro9sl.css';
import '../../css/s/so-from-20.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew mytomn"/><path class="iw1iew lotvgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:download-twotone-loop"} {...others} />);
}

export default Component;
