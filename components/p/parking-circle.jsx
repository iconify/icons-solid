import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h14jdxbux.css';
import '../../css/q/q_a5zcbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h14jdxbux"/><path class="q_a5zcbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:parking-circle"} {...others} />);
}

export default Component;
