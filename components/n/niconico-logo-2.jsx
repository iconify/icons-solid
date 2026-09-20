import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/q/q59rqoble.css';
import '../../css/z/z0539tblu.css';
import '../../css/s/slm0o6u7y.css';
import '../../css/x/xfyj-zngt.css';
import '../../css/b/bs1jlgbpk.css';
import '../../css/y/y780t3bla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="q59rqoble"/><path class="z0539tblu"/><path class="slm0o6u7y"/><path class="xfyj-zngt"/><path class="bs1jlgbpk"/><path class="y780t3bla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:niconico-logo-2"} {...others} />);
}

export default Component;
