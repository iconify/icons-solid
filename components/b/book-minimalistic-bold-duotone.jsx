import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd9cc7byy.css';
import '../../css/p/p0x-smbyj.css';
import '../../css/k/k5ylgwyba.css';
import '../../css/s/sdgjn765p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zd9cc7byy"/><path class="p0x-smbyj"/><path class="k5ylgwyba"/><path class="sdgjn765p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
