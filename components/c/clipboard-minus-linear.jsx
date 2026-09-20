import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dqgo5wbxe.css';
import '../../css/m/m390b8qby.css';
import '../../css/j/jj9sgub3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dqgo5wbxe"/><path class="m390b8qby"/><path class="jj9sgub3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-minus-linear"} {...others} />);
}

export default Component;
