import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/zu2bryg9u.css';
import '../../css/e/e04dgqeia.css';
import '../../css/b/b42widjhx.css';
import '../../css/r/rzmr72baa.css';
import '../../css/a/aexfgn-ni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="zu2bryg9u"/><path class="e04dgqeia"/><path class="b42widjhx"/><path class="rzmr72baa"/><path class="aexfgn-ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:politics-vote-2"} {...others} />);
}

export default Component;
