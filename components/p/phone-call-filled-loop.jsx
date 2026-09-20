import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dryodi.css';
import '../../css/i/iw1iew.css';
import '../../css/g/g9kl8y.css';
import '../../css/y/y4wbml.css';
import '../../css/p/pprfug.css';
import '../../css/s/so-from-62.css';
import '../../css/t/tr-b5mmly.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-ohjegy.css';
import '../../css/s/so-88gdib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dryodi iw1iew"/><path class="g9kl8y iw1iew y4wbml"/><path class="iw1iew pprfug y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:phone-call-filled-loop"} {...others} />);
}

export default Component;
