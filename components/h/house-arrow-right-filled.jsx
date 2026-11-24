import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbsonz3ob.css';
import '../../css/m/mtfo425qq.css';
import '../../css/v/vu0p8sbio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbsonz3ob"/><path class="mtfo425qq"/><path class="vu0p8sbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:house-arrow-right-filled"} {...others} />);
}

export default Component;
