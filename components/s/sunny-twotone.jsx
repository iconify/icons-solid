import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/u/uib4oa.css';
import '../../css/b/bnlosc.css';
import '../../css/y/y4wbml.css';
import '../../css/p/pcbmhn.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew uib4oa"/><path class="bnlosc iw1iew y4wbml"/><path class="iw1iew pcbmhn y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:sunny-twotone"} {...others} />);
}

export default Component;
