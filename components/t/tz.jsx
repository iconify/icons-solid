import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qsjo-k-pw.css';
import '../../css/h/hd19pub9w.css';
import '../../css/u/u2bl5bc3s.css';
import '../../css/f/f4rxfjfpz.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="qsjo-k-pw"/><path class="hd19pub9w"/><path class="u2bl5bc3s"/><path class="f4rxfjfpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:tz"} {...others} />);
}

export default Component;
