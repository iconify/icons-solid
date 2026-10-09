import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtevs4iam.css';
import '../../css/z/zwirr6l5z.css';
import '../../css/y/yv48g7bcu.css';
import '../../css/e/egsvn-bkw.css';
import '../../css/v/vv729ib_h.css';
import '../../css/h/hjakypb9j.css';
import '../../css/r/r1fb64blm.css';
import '../../css/p/prfptqbhf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rtevs4iam"/><path class="zwirr6l5z"/><path class="yv48g7bcu"/><path class="egsvn-bkw"/><path class="vv729ib_h"/><path class="hjakypb9j"/><path class="r1fb64blm"/><path class="prfptqbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-plus-20-bold"} {...others} />);
}

export default Component;
