import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yais6jgsj.css';
import '../../css/a/afeqkmbls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yais6jgsj"/><path vector-effect="non-scaling-stroke" class="afeqkmbls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:justify-space-between"} {...others} />);
}

export default Component;
