import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g99su5_wf.css';
import '../../css/s/s_lsgrezf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="g99su5_wf"/><path class="s_lsgrezf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:rise"} {...others} />);
}

export default Component;
