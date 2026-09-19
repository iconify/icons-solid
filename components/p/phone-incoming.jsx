import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/ahakhtqfj.css';
import '../../css/a/a17suvc_q.css';
import '../../css/b/bv5qnrbtv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ahakhtqfj"/><path class="a17suvc_q"/><path class="bv5qnrbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:phone-incoming"} {...others} />);
}

export default Component;
