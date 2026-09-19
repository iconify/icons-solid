import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/p-phd4quh.css';
import '../../css/k/kwx8kxbpk.css';
import '../../css/a/a0a4fku7h.css';
import '../../css/n/n4ic6rqfz.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="p-phd4quh"/><path class="kwx8kxbpk"/><path class="a0a4fku7h"/><path class="n4ic6rqfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:st"} {...others} />);
}

export default Component;
