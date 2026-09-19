import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/icqymxxin.css';
import '../../css/o/ozd7r4b-o.css';
import '../../css/b/buavps-jn.css';
import '../../css/w/w7m_-ltlk.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="icqymxxin"/><path class="ozd7r4b-o"/><path class="buavps-jn"/><path class="w7m_-ltlk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ca-bc"} {...others} />);
}

export default Component;
