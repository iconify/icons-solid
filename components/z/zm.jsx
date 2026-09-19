import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/odwb28lai.css';
import '../../css/b/bepfeubss.css';
import '../../css/h/hzikswbgz.css';
import '../../css/w/wtopwl5cz.css';
import '../../css/f/fbsybyz-p.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="odwb28lai"/><path class="bepfeubss"/><path class="hzikswbgz"/><path class="wtopwl5cz"/><path class="fbsybyz-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:zm"} {...others} />);
}

export default Component;
