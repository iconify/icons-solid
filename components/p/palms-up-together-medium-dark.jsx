import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjtxb2bkn.css';
import '../../css/y/y77s6pbru.css';
import '../../css/y/yu4jrjx8c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vjtxb2bkn"/><path class="y77s6pbru"/><path class="yu4jrjx8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:palms-up-together-medium-dark"} {...others} />);
}

export default Component;
