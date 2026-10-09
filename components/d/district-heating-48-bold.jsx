import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr-eedcjf.css';
import '../../css/r/rqb2ygbhr.css';
import '../../css/z/zb4cfkbur.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tr-eedcjf"/><path class="rqb2ygbhr"/><path class="zb4cfkbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:district-heating-48-bold"} {...others} />);
}

export default Component;
