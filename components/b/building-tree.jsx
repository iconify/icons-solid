import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/klnargz1y.css';
import '../../css/f/f11k2wbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="klnargz1y"/><path class="f11k2wbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:building-tree"} {...others} />);
}

export default Component;
