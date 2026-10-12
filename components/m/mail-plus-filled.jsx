import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yismpnbbv.css';
import '../../css/t/t3kg4fp0h.css';
import '../../css/z/zc_h-6bbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yismpnbbv"/><path class="t3kg4fp0h"/><path class="zc_h-6bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-plus-filled"} {...others} />);
}

export default Component;
