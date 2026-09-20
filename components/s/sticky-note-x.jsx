import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/we-4enbxy.css';
import '../../css/p/pvh9yzklw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="we-4enbxy"/><path class="pvh9yzklw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sticky-note-x"} {...others} />);
}

export default Component;
