import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/st9uts4et.css';
import '../../css/u/ue0lmc99t.css';
import '../../css/b/b50r88b4j.css';
import '../../css/h/hqfzx6bra.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="st9uts4et"/><path class="ue0lmc99t"/><path class="b50r88b4j"/><path class="hqfzx6bra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:upload-laptop"} {...others} />);
}

export default Component;
