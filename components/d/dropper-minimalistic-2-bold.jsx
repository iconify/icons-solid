import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7d917_2k.css';
import '../../css/u/ud-yki_gm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l7d917_2k"/><path class="ud-yki_gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-minimalistic-2-bold"} {...others} />);
}

export default Component;
