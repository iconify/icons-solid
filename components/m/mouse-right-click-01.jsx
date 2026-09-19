import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n1hf8wbde.css';
import '../../css/p/py4wdgbnb.css';
import '../../css/m/m5ccstaut.css';
import '../../css/t/tuxpj-bux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n1hf8wbde"/><path class="py4wdgbnb"/><path class="m5ccstaut"/><path class="tuxpj-bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-right-click-01"} {...others} />);
}

export default Component;
