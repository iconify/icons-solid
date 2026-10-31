import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d7xew_bau.css';
import '../../css/f/fkevoibzi.css';
import '../../css/f/f6a0ngb9b.css';
import '../../css/r/rqh2feb-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d7xew_bau wm-shadow"/><path class="fkevoibzi wm-shadow"/><path class="f6a0ngb9b"/><path class="rqh2feb-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:utensils"} {...others} />);
}

export default Component;
