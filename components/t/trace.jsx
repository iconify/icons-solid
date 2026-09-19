import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gqt8-qbzw.css';
import '../../css/n/n__k3zkmj.css';
import '../../css/g/gufqzrbqo.css';
import '../../css/j/j94ttjdnc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="gqt8-qbzw"/><path class="n__k3zkmj"/><path class="gufqzrbqo"/><path class="j94ttjdnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:trace"} {...others} />);
}

export default Component;
