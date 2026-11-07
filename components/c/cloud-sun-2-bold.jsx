import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu_991baa.css';
import '../../css/x/xrwz_e-ja.css';
import '../../css/z/z-vgfuljg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iu_991baa"/><path class="xrwz_e-ja"/><path class="z-vgfuljg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-sun-2-bold"} {...others} />);
}

export default Component;
