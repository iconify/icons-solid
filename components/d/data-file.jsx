import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utoaypbgw.css';
import '../../css/a/a1i91xf9p.css';
import '../../css/u/up3b-22co.css';
import '../../css/q/q741qmbjc.css';
import '../../css/p/pjfp3vmeb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="utoaypbgw"/><rect class="a1i91xf9p"/><path class="up3b-22co"/><rect class="q741qmbjc"/><rect class="pjfp3vmeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:data-file"} {...others} />);
}

export default Component;
