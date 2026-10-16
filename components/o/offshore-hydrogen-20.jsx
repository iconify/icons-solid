import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qorl_g63f.css';
import '../../css/m/m2pt6cjck.css';
import '../../css/o/okdvo848h.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qorl_g63f"/><path class="m2pt6cjck"/><path class="okdvo848h"/><path class="pycxazbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-hydrogen-20"} {...others} />);
}

export default Component;
