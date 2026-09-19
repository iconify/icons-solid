import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/un2x9lbgo.css';
import '../../css/h/havk16b2m.css';
import '../../css/b/bi16igbmh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="un2x9lbgo"/><path class="havk16b2m"/><path class="bi16igbmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:connection"} {...others} />);
}

export default Component;
