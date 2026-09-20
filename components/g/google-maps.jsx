import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag15_abea.css';
import '../../css/k/k3jegzb8r.css';
import '../../css/b/b0zjanbgx.css';
import '../../css/x/xqk69l56d.css';
import '../../css/d/d2z4wyw-h.css';

const viewBox = {"width":92.3,"height":132.3};
const content = `<path class="ag15_abea"/><path class="k3jegzb8r"/><path class="b0zjanbgx"/><path class="xqk69l56d"/><path class="d2z4wyw-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-maps"} {...others} />);
}

export default Component;
