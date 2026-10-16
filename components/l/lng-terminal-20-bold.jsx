import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c10rf7bkz.css';
import '../../css/e/em_yc89qg.css';
import '../../css/i/iyvdefbei.css';
import '../../css/b/by_69xb5j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c10rf7bkz"/><path class="em_yc89qg"/><path class="iyvdefbei"/><path class="by_69xb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lng-terminal-20-bold"} {...others} />);
}

export default Component;
