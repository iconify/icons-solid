import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zz7c-w6eh.css';
import '../../css/i/ieaqfl2cu.css';
import '../../css/i/ikatgjnuw.css';
import '../../css/w/wwwqcnynk.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zz7c-w6eh"/><path class="ieaqfl2cu"/><path class="ikatgjnuw"/><path class="wwwqcnynk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:rw"} {...others} />);
}

export default Component;
