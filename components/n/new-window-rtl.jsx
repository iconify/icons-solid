import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksny98b8v.css';
import '../../css/a/ay56a163g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ksny98b8v"/><path class="ay56a163g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:new-window-rtl"} {...others} />);
}

export default Component;
