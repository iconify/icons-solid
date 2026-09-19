import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhl70bbot.css';
import '../../css/o/o1rvf3vak.css';
import '../../css/e/eafo8gg7b.css';
import '../../css/v/vk9si75ke.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dhl70bbot"/><path class="o1rvf3vak"/><circle class="eafo8gg7b"/><circle class="vk9si75ke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shopping"} {...others} />);
}

export default Component;
