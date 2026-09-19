import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_e3jkbdy.css';
import '../../css/v/vwi7rfg8q.css';
import '../../css/z/zb-92zz6n.css';
import '../../css/p/p-zibkb0b.css';
import '../../css/e/e8wdsnbcv.css';
import '../../css/o/ont3nvb2p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="b_e3jkbdy"/><path class="vwi7rfg8q"/><path class="zb-92zz6n"/><path class="p-zibkb0b"/><path class="e8wdsnbcv"/><path class="ont3nvb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:devicon"} {...others} />);
}

export default Component;
