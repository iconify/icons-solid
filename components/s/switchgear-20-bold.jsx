import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tirtiacjr.css';
import '../../css/h/hvucwhbtq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tirtiacjr"/><path class="hvucwhbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switchgear-20-bold"} {...others} />);
}

export default Component;
