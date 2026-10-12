import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy1isrbes.css';
import '../../css/z/zrmu6-ymm.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dy1isrbes"/><path class="zrmu6-ymm"/><path class="zc_h-6bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-pen-filled"} {...others} />);
}

export default Component;
