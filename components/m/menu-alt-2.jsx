import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsyd9_bju.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lsyd9_bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:menu-alt-2"} {...others} />);
}

export default Component;
