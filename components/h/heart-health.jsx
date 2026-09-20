import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dsdz8zbww.css';
import '../../css/t/tkghq5bjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dsdz8zbww"/><path class="tkghq5bjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:heart-health"} {...others} />);
}

export default Component;
