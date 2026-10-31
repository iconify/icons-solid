import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/quub31myw.css';
import '../../css/h/hb1ohtb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="quub31myw"/><path class="hb1ohtb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:telegram-duocolor-round"} {...others} />);
}

export default Component;
