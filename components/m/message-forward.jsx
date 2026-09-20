import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yn1dpsq2n.css';
import '../../css/z/zb7jqkb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yn1dpsq2n"/><path class="zb7jqkb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:message-forward"} {...others} />);
}

export default Component;
