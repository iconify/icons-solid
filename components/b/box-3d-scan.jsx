import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gwnx6_byv.css';
import '../../css/p/phg74re_f.css';
import '../../css/g/g6ys_sbcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gwnx6_byv"/><path class="phg74re_f"/><path class="g6ys_sbcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-scan"} {...others} />);
}

export default Component;
