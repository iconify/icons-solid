import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnn0khbkt.css';
import '../../css/a/a84os_-eu.css';
import '../../css/p/pfpbgjyyk.css';
import '../../css/v/v9r_7eb6p.css';
import '../../css/s/s3ce7if1k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fnn0khbkt"/><path class="a84os_-eu"/><path class="pfpbgjyyk"/><path class="v9r_7eb6p"/><path class="s3ce7if1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:microscope"} {...others} />);
}

export default Component;
