import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gqwksoj0t.css';
import '../../css/a/am4edzbjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="gqwksoj0t wm-k"/><path class="am4edzbjg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radar-gloss"} {...others} />);
}

export default Component;
