import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlu0cunfl.css';
import '../../css/o/ofj6-db5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zlu0cunfl"/><path class="ofj6-db5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-football"} {...others} />);
}

export default Component;
