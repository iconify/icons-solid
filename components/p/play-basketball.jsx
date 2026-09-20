import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frggv_b9o.css';
import '../../css/p/p9yw2ebxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="frggv_b9o"/><path class="p9yw2ebxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-basketball"} {...others} />);
}

export default Component;
