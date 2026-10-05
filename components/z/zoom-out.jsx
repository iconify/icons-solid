import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/abwis6bpt.css';
import '../../css/f/fop159nlm.css';
import '../../css/m/mofdx0msy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="abwis6bpt"/><path class="fop159nlm"/><path class="mofdx0msy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:zoom-out"} {...others} />);
}

export default Component;
