import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pkgsfqbib.css';
import '../../css/y/y5rfibc6p.css';
import '../../css/j/jbi5v9bue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pkgsfqbib wm-a"/><path class="wm-k y5rfibc6p"/><path class="jbi5v9bue wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rss-sketch"} {...others} />);
}

export default Component;
