import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/kzdawxxtp.css';
import '../../css/w/wvr4a0ytd.css';
import '../../css/t/tplpwkbko.css';
import '../../css/b/byoe93bpe.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="kzdawxxtp"/><path class="wvr4a0ytd"/><path class="tplpwkbko"/><path class="byoe93bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:gp"} {...others} />);
}

export default Component;
