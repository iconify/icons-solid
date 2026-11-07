import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygwht93_n.css';
import '../../css/l/lmf91iz2i.css';
import '../../css/h/ha54h0vkg.css';
import '../../css/y/ydyerrbhj.css';
import '../../css/h/h6w61wbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ygwht93_n"/><path class="lmf91iz2i"/><path class="ha54h0vkg"/><path class="ydyerrbhj"/><path class="h6w61wbcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-bookmark-bold-duotone"} {...others} />);
}

export default Component;
