import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/k32lvcurk.css';
import '../../css/m/mxzdjhy-d.css';
import '../../css/s/sm8-7hzdf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="k32lvcurk"/><path class="mxzdjhy-d"/><path class="sm8-7hzdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ranking"} {...others} />);
}

export default Component;
