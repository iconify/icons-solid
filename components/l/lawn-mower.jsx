import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zoj0exb9d.css';
import '../../css/z/zb-_04jme.css';
import '../../css/u/ul8e16bor.css';
import '../../css/n/npkxtynbr.css';
import '../../css/h/huhoppbiv.css';
import '../../css/a/amixszbqe.css';
import '../../css/j/j6uh3ddon.css';
import '../../css/x/xrw70s-rp.css';
import '../../css/a/aptniheuz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zoj0exb9d"/><path class="zb-_04jme"/><circle class="ul8e16bor"/><circle class="npkxtynbr"/><path class="huhoppbiv"/><path transform="matrix(1.549 0 0 1.552 -16.13 -26.71)" class="amixszbqe"/><ellipse class="j6uh3ddon"/><ellipse class="xrw70s-rp"/><rect class="aptniheuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lawn-mower"} {...others} />);
}

export default Component;
