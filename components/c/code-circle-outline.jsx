import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxcwapovt.css';
import '../../css/c/cn3vjbcnl.css';
import '../../css/c/cpsdjbhjl.css';
import '../../css/q/q1sggqbkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxcwapovt"/><path class="cn3vjbcnl"/><path class="cpsdjbhjl"/><path clip-rule="evenodd" class="q1sggqbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-circle-outline"} {...others} />);
}

export default Component;
