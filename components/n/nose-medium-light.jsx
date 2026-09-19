import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_oh_oexq.css';
import '../../css/s/sbj31abka.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n_oh_oexq"/><path class="sbj31abka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:nose-medium-light"} {...others} />);
}

export default Component;
