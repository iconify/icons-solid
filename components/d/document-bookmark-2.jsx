import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fovk9pb-n.css';
import '../../css/t/ts5mj-bqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="fovk9pb-n"/><path class="ts5mj-bqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:document-bookmark-2"} {...others} />);
}

export default Component;
