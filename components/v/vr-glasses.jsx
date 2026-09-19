import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt-yivboh.css';
import '../../css/j/jbrgj218i.css';
import '../../css/j/jxaa--bmi.css';
import '../../css/o/o3p20zrou.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="mt-yivboh"><path class="jbrgj218i"/><path class="jxaa--bmi"/><path class="o3p20zrou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vr-glasses"} {...others} />);
}

export default Component;
