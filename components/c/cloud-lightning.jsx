import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xagntm9ts.css';
import '../../css/r/rn9079f4b.css';
import '../../css/g/g9kozpbat.css';
import '../../css/r/rzhi-x3ia.css';
import '../../css/q/qerpnibhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xagntm9ts"/><path class="rn9079f4b"/><path class="g9kozpbat"/><path class="rzhi-x3ia"/><path class="qerpnibhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-lightning"} {...others} />);
}

export default Component;
