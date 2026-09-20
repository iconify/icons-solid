import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e29c2gpyz.css';
import '../../css/b/b53bnabsh.css';
import '../../css/k/kmi_pfcpe.css';
import '../../css/i/ix8qktuzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e29c2gpyz"/><path class="b53bnabsh"/><path class="kmi_pfcpe"/><path class="ix8qktuzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-bold"} {...others} />);
}

export default Component;
