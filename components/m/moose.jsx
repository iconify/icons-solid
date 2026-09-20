import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_16pexbl.css';
import '../../css/x/xy0ygzbmk.css';
import '../../css/q/qlv67_b1g.css';
import '../../css/a/aw6d82lyt.css';
import '../../css/i/iq7o9449n.css';
import '../../css/e/e_91tzb5p.css';
import '../../css/f/fwlu77bge.css';
import '../../css/y/yf933-bim.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r_16pexbl"/><path class="xy0ygzbmk"/><path class="qlv67_b1g"/><path class="aw6d82lyt"/><path class="iq7o9449n"/><circle class="e_91tzb5p"/><circle class="fwlu77bge"/><path class="yf933-bim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:moose"} {...others} />);
}

export default Component;
