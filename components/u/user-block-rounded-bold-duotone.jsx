import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzeuvdbtu.css';
import '../../css/l/lc21qzuqt.css';
import '../../css/b/ba30w5b_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hzeuvdbtu"/><path class="lc21qzuqt"/><path class="ba30w5b_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-block-rounded-bold-duotone"} {...others} />);
}

export default Component;
