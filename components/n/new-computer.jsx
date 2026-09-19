import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/lkuvn8t3r.css';
import '../../css/g/g3d0sd4xn.css';
import '../../css/r/rcncnkwrd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="lkuvn8t3r"/><path class="g3d0sd4xn"/><path class="rcncnkwrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:new-computer"} {...others} />);
}

export default Component;
