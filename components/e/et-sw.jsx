import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/o2eglx49u.css';
import '../../css/j/ji7at9p2i.css';
import '../../css/s/su4ecrboc.css';
import '../../css/b/bnlhbtbjz.css';
import '../../css/w/wi3sb5hft.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="o2eglx49u"/><path class="ji7at9p2i"/><path class="su4ecrboc"/><path class="bnlhbtbjz"/><path class="wi3sb5hft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:et-sw"} {...others} />);
}

export default Component;
