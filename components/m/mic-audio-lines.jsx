import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c3ya03b8q.css';
import '../../css/v/v2jnopb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c3ya03b8q"/><rect class="v2jnopb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mic-audio-lines"} {...others} />);
}

export default Component;
