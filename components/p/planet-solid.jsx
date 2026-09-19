import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-l1pd0_w.css';
import '../../css/b/brobnwmaq.css';
import '../../css/b/b7jxa2myi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="brobnwmaq"/><path class="b7jxa2myi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:planet-solid"} {...others} />);
}

export default Component;
