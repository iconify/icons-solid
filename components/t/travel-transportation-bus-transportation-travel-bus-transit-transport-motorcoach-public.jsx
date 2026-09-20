import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j8crd68-l.css';
import '../../css/s/sz29fy9dg.css';
import '../../css/a/a2op81bjg.css';
import '../../css/t/tawx67bbe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="j8crd68-l"/><path class="sz29fy9dg"/><circle class="a2op81bjg"/><circle class="tawx67bbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-transportation-bus-transportation-travel-bus-transit-transport-motorcoach-public"} {...others} />);
}

export default Component;
