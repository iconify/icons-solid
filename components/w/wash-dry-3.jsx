import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tl0opmb4g.css';
import '../../css/b/bc7lfkzoa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tl0opmb4g"/><path class="bc7lfkzoa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-dry-3"} {...others} />);
}

export default Component;
