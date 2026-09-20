import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pcy2ipnog.css';
import '../../css/g/g-65bbsus.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="pcy2ipnog"/><path class="g-65bbsus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-protection-check"} {...others} />);
}

export default Component;
