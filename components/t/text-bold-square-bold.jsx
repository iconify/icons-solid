import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krw35zlyq.css';
import '../../css/b/byoze1bep.css';
import '../../css/v/vdz_zbbus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="krw35zlyq"/><path class="byoze1bep"/><path clip-rule="evenodd" class="vdz_zbbus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-bold-square-bold"} {...others} />);
}

export default Component;
