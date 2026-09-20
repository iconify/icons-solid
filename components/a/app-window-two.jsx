import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ho-p-ybic.css';
import '../../css/a/axnfqob6s.css';
import '../../css/c/c276n-0-a.css';
import '../../css/s/sb5f3xbeu.css';
import '../../css/u/u71gzzpbe.css';
import '../../css/f/fyi_g8b-z.css';
import '../../css/l/lshthh_bn.css';
import '../../css/y/ywm9gsboy.css';
import '../../css/v/vlcf5ccda.css';
import '../../css/f/famgjho6g.css';
import '../../css/l/lkkzq8bvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ho-p-ybic"/><path class="axnfqob6s"/><path class="c276n-0-a"/><path class="sb5f3xbeu"/><path class="u71gzzpbe"/><path class="fyi_g8b-z"/><path class="lshthh_bn"/><path class="ywm9gsboy"/><path class="vlcf5ccda"/><path class="famgjho6g"/><path class="lkkzq8bvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:app-window-two"} {...others} />);
}

export default Component;
