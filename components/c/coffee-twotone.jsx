import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/k/kb3-_t.css';
import '../../css/y/y4wbml.css';
import '../../css/y/ywbs5z.css';
import '../../css/r/rakmch.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-10.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew kb3-_t"/><path class="iw1iew y4wbml ywbs5z"/><path class="iw1iew rakmch y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:coffee-twotone"} {...others} />);
}

export default Component;
