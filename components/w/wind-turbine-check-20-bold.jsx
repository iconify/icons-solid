import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtevs4iam.css';
import '../../css/c/cgh81_bcb.css';
import '../../css/b/bo9dndb5j.css';
import '../../css/j/jeq48rbsh.css';
import '../../css/j/jq18rebpo.css';
import '../../css/g/gocwjcc2m.css';
import '../../css/x/xlo7isb0c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rtevs4iam"/><path class="cgh81_bcb"/><path class="bo9dndb5j"/><path class="jeq48rbsh"/><path class="jq18rebpo"/><path class="gocwjcc2m"/><path class="xlo7isb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-check-20-bold"} {...others} />);
}

export default Component;
