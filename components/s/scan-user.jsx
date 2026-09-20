import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mql6v7yzb.css';
import '../../css/f/ftd68dboz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mql6v7yzb"/><path class="ftd68dboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:scan-user"} {...others} />);
}

export default Component;
