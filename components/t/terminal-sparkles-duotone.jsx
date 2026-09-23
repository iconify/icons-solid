import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mbnsw0b8c.css';
import '../../css/f/fq798ybdh.css';
import '../../css/j/jg62-fcal.css';
import '../../css/v/vlqs_8lvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mbnsw0b8c"/><path class="fq798ybdh"/><path class="jg62-fcal"/><path class="vlqs_8lvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:terminal-sparkles-duotone"} {...others} />);
}

export default Component;
