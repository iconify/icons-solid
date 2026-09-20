import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z67njvx5t.css';
import '../../css/w/w85hymh_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z67njvx5t"/><path class="w85hymh_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:piano"} {...others} />);
}

export default Component;
