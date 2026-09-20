import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/t/tk2glo.css';
import '../../css/k/k13qdg.css';
import '../../css/x/xa2rfx.css';
import '../../css/z/zx2p5t.css';
import '../../css/s/s_woiq.css';
import '../../css/s/so-from-66.css';
import '../../css/d/d-c_e20m.css';
import '../../css/d/d-x9kqov.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c tk2glo"/><path class="k13qdg"/><path class="a0m25c xa2rfx"/><path class="a0m25c zx2p5t"/><path class="a0m25c s_woiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:calendar"} {...others} />);
}

export default Component;
