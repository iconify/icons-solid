import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jg8sybrjx.css';
import '../../css/s/s_11d5g6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jg8sybrjx"/><path class="s_11d5g6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hand-helping"} {...others} />);
}

export default Component;
