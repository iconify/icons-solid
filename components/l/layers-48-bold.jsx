import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wku28jkbv.css';
import '../../css/e/eagcwzj3r.css';
import '../../css/s/scd3bbbpj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wku28jkbv"/><path class="eagcwzj3r"/><path class="scd3bbbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:layers-48-bold"} {...others} />);
}

export default Component;
