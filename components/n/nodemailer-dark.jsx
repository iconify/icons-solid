import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cspl7mbgk.css';
import '../../css/r/rq1b_prvq.css';
import '../../css/v/vydu3dknt.css';
import '../../css/i/i-6i6abaz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cspl7mbgk"/><path class="rq1b_prvq"/><path class="vydu3dknt"/><path class="i-6i6abaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodemailer-dark"} {...others} />);
}

export default Component;
