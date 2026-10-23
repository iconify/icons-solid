import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t9-657byc.css';
import '../../css/s/swh7fbbyr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t9-657byc"/><path class="swh7fbbyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:houses"} {...others} />);
}

export default Component;
