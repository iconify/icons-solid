import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xzm6g-bje.css';
import '../../css/y/ytlnqnvjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xzm6g-bje"/><path vector-effect="non-scaling-stroke" class="ytlnqnvjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:navigation"} {...others} />);
}

export default Component;
