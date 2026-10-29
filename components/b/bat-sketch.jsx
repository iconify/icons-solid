import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fbon0hb5t.css';
import '../../css/g/ggrxnez9p.css';
import '../../css/h/h02h9d79a.css';
import '../../css/g/g3a8c8bfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fbon0hb5t"/><path class="ggrxnez9p wm-k"/><path class="h02h9d79a wm-k"/><path class="g3a8c8bfa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bat-sketch"} {...others} />);
}

export default Component;
