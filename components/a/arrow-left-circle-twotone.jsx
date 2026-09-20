import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/w/w6175y.css';
import '../../css/o/or6sls.css';
import '../../css/y/y4wbml.css';
import '../../css/z/znhgjx.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew w6175y"/><path class="iw1iew or6sls y4wbml"/><path class="iw1iew y4wbml znhgjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:arrow-left-circle-twotone"} {...others} />);
}

export default Component;
