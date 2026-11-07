import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io95umbud.css';
import '../../css/v/vr0cnhd_c.css';
import '../../css/d/dc6a51hpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="io95umbud"/><path clip-rule="evenodd" class="vr0cnhd_c"/><path class="dc6a51hpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-bold"} {...others} />);
}

export default Component;
