import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tj6aivbzl.css';
import '../../css/i/iq9s472vl.css';
import '../../css/c/c9oi8rb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><ellipse class="tj6aivbzl"/><path class="iq9s472vl"/><path class="c9oi8rb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:database-zap"} {...others} />);
}

export default Component;
