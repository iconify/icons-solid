import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bylbwoj8p.css';
import '../../css/j/jgv618mbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="bylbwoj8p"/><path class="jgv618mbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-top-dashed-sharp-duotone"} {...others} />);
}

export default Component;
