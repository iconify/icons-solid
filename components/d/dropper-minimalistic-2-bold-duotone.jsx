import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot8uoib6t.css';
import '../../css/w/wz4p5vb2f.css';
import '../../css/e/e_fwmnbpj.css';
import '../../css/s/swqf80bgf.css';
import '../../css/t/tnatgib_w.css';
import '../../css/b/blwfracnm.css';
import '../../css/y/ypdpi_v0j.css';
import '../../css/s/shggp8boi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ot8uoib6t"/><path class="wz4p5vb2f"/><path class="e_fwmnbpj"/><path class="swqf80bgf"/><path class="tnatgib_w"/><path class="blwfracnm"/><path class="ypdpi_v0j"/><path class="shggp8boi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-minimalistic-2-bold-duotone"} {...others} />);
}

export default Component;
