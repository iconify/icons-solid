import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nzsvzjb4p.css';
import '../../css/i/iihdugb7k.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="nzsvzjb4p"/><path class="iihdugb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:game-controll"} {...others} />);
}

export default Component;
