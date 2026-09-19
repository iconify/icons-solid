import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6x25je3c.css';
import '../../css/l/l9wcuz8dq.css';
import '../../css/m/mchh0pr4c.css';
import '../../css/l/lbbeo5bez.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="u6x25je3c"/><path class="l9wcuz8dq"/><path class="mchh0pr4c"/><path class="lbbeo5bez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:lungs"} {...others} />);
}

export default Component;
