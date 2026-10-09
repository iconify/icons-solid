import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_lk_zxsl.css';
import '../../css/x/xjb0j7b-v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i_lk_zxsl"/><path class="xjb0j7b-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spirit-level-20"} {...others} />);
}

export default Component;
