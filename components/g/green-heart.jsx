import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3s-_cc2g.css';
import '../../css/m/m8bqvccua.css';
import '../../css/f/ffwvq5baq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h3s-_cc2g"/><path class="m8bqvccua"/><ellipse transform="rotate(30 23.477 12.594)" class="ffwvq5baq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:green-heart"} {...others} />);
}

export default Component;
