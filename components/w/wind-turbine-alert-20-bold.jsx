import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtevs4iam.css';
import '../../css/c/cgh81_bcb.css';
import '../../css/r/r8c2bqbqg.css';
import '../../css/j/jeq48rbsh.css';
import '../../css/v/vv729ib_h.css';
import '../../css/a/as6kz-7sz.css';
import '../../css/b/b16ij4gjd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rtevs4iam"/><path class="cgh81_bcb"/><path class="r8c2bqbqg"/><path class="jeq48rbsh"/><path class="vv729ib_h"/><path class="as6kz-7sz"/><path class="b16ij4gjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-alert-20-bold"} {...others} />);
}

export default Component;
