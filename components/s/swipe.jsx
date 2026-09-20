import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1y47fxpf.css';
import '../../css/y/yeq9bi_ig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a1y47fxpf"/><path class="yeq9bi_ig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:swipe"} {...others} />);
}

export default Component;
