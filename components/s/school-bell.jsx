import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxony1ant.css';
import '../../css/g/g_5-efcuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jxony1ant"/><path class="g_5-efcuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:school-bell"} {...others} />);
}

export default Component;
