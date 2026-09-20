import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj437j.css';
import '../../css/i/iw1iew.css';
import '../../css/o/or6sls.css';
import '../../css/y/y4wbml.css';
import '../../css/z/znhgjx.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cj437j iw1iew"/><path class="iw1iew or6sls y4wbml"/><path class="iw1iew y4wbml znhgjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:arrow-left-square-twotone"} {...others} />);
}

export default Component;
