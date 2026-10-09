import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edwtppbpi.css';
import '../../css/a/aw5_q9beg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="edwtppbpi"/><path class="aw5_q9beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:saf-48"} {...others} />);
}

export default Component;
