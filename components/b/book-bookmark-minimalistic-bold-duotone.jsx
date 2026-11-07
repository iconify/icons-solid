import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy4soacjr.css';
import '../../css/p/p0x-smbyj.css';
import '../../css/k/k5ylgwyba.css';
import '../../css/e/eaff3bmum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sy4soacjr"/><path class="p0x-smbyj"/><path class="k5ylgwyba"/><path class="eaff3bmum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-bookmark-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
