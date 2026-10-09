import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts501wnao.css';
import '../../css/m/ma0bxjbgr.css';
import '../../css/m/mxvrl8fhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ts501wnao"/><path class="ma0bxjbgr"/><path class="mxvrl8fhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-20"} {...others} />);
}

export default Component;
