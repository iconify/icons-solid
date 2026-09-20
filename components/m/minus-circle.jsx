import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/teodj6f_a.css';
import '../../css/g/gdp3_mbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="teodj6f_a"/><path clip-rule="evenodd" class="gdp3_mbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:minus-circle"} {...others} />);
}

export default Component;
