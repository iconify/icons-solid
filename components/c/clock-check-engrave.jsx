import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gqv8-fufc.css';
import '../../css/k/kz9nbbblq.css';
import '../../css/x/x7zotnx1g.css';
import '../../css/f/fuyz5hbco.css';
import '../../css/f/f78e21b0t.css';
import '../../css/l/lf-b92d3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gqv8-fufc wm-k"/><path class="kz9nbbblq wm-s"/><path class="wm-shadow x7zotnx1g"/><path class="fuyz5hbco wm-k"/><path class="f78e21b0t wm-a"/><path class="lf-b92d3v wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clock-check-engrave"} {...others} />);
}

export default Component;
