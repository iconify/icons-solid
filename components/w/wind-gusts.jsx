import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mht05k55h.css';
import '../../css/d/ds9m6_b0q.css';
import '../../css/f/fszk4qb6g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mht05k55h"/><path class="ds9m6_b0q"/><path class="fszk4qb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wind-gusts"} {...others} />);
}

export default Component;
