import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xalnqm_-k.css';
import '../../css/p/pjtb2zjhw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xalnqm_-k"/><path class="pjtb2zjhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:square-check-20-bold"} {...others} />);
}

export default Component;
