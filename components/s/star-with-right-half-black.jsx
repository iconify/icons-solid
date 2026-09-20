import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5zapxbrz.css';
import '../../css/v/v1tc8gbmm.css';
import '../../css/v/vxvdrdbbi.css';
import '../../css/z/z04drlb1l.css';
import '../../css/o/o5_eq6e0u.css';
import '../../css/e/e2opw73ez.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y5zapxbrz"/><path class="v1tc8gbmm"/><path class="vxvdrdbbi"/><g class="z04drlb1l"><path class="o5_eq6e0u"/><path class="e2opw73ez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:star-with-right-half-black"} {...others} />);
}

export default Component;
