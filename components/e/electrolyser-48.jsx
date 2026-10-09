import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk8dzgglt.css';
import '../../css/e/eg02k6bgr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lk8dzgglt"/><path class="eg02k6bgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electrolyser-48"} {...others} />);
}

export default Component;
