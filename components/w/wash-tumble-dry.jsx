import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tl0opmb4g.css';
import '../../css/j/j51f-ebgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tl0opmb4g"/><path class="j51f-ebgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-tumble-dry"} {...others} />);
}

export default Component;
